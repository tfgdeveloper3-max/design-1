import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import laptopFrame from "/Images/laptop.jpg";
import petswatch from "/Images/mockup1.jpg";
import wholefoods from "/Images/mockup2.jpg";
import foodpeon from "/Images/mockup3.jpg";
import bespa from "/Images/mockup4.png";

const SCREEN_RECT = {
    left: 13.5,
    top: 7.1,
    width: 73.0,
    height: 77.4,
};

interface MockupItem {
    id: string;
    name: string;
    image: string;
}

const MOCKUPS: MockupItem[] = [
    { id: "petswatch", name: "PetsWatch — Pet Adoption", image: petswatch },
    { id: "wholefoods", name: "Whole Foods Market", image: wholefoods },
    { id: "foodpeon", name: "Foodpeon — Grocery Delivery", image: foodpeon },
    { id: "bespa", name: "BeSpa — Wellness & Spa", image: bespa },
];

const EDGE_EPSILON = 4;
const TRANSITION_LOCK_MS = 650;

export default function Portfolio() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [scrollY, setScrollY] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

    const wrapRef = useRef<HTMLDivElement>(null);
    const screenRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const transitioning = useRef(false);
    const naturalRatio = useRef(0); 

    const current = MOCKUPS[index];
    const prevItem = MOCKUPS[(index - 1 + MOCKUPS.length) % MOCKUPS.length];
    const nextItem = MOCKUPS[(index + 1) % MOCKUPS.length];

    const recalcMaxScroll = useCallback(() => {
        const viewport = screenRef.current;
        if (!viewport || !naturalRatio.current) return;
        const vw = viewport.clientWidth;
        const vh = viewport.clientHeight;
        const scaledHeight = vw * naturalRatio.current;
        setMaxScroll(Math.max(0, scaledHeight - vh));
    }, []);

    const handleImageLoad = useCallback(() => {
        const img = imgRef.current;
        if (!img || !img.naturalWidth) return;
        naturalRatio.current = img.naturalHeight / img.naturalWidth;
        recalcMaxScroll();
    }, [recalcMaxScroll]);

    useLayoutEffect(() => {
        recalcMaxScroll();
    }, [index, recalcMaxScroll]);

    useEffect(() => {
        const ro = new ResizeObserver(() => recalcMaxScroll());
        if (screenRef.current) ro.observe(screenRef.current);
        return () => ro.disconnect();
    }, [recalcMaxScroll]);

    const goNext = useCallback(() => {
        if (transitioning.current) return;
        transitioning.current = true;
        setDirection(1);
        setScrollY(0);
        setIndex((i) => (i + 1) % MOCKUPS.length);
        setTimeout(() => (transitioning.current = false), TRANSITION_LOCK_MS);
    }, []);

    const goPrev = useCallback(() => {
        if (transitioning.current) return;
        transitioning.current = true;
        setDirection(-1);
        setScrollY(0);
        setIndex((i) => (i - 1 + MOCKUPS.length) % MOCKUPS.length);
        setTimeout(() => (transitioning.current = false), TRANSITION_LOCK_MS);
    }, []);

    useEffect(() => {
        const node = wrapRef.current;
        if (!node) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (!hasInteracted) setHasInteracted(true);
            if (transitioning.current) return;

            const delta = e.deltaY;

            setScrollY((prevY) => {
                const next = prevY + delta;

                if (delta > 0 && prevY >= maxScroll - EDGE_EPSILON) {
                    goNext();
                    return prevY;
                }
                if (delta < 0 && prevY <= EDGE_EPSILON) {
                    goPrev();
                    return prevY;
                }
                return Math.min(Math.max(next, 0), maxScroll);
            });
        };

        node.addEventListener("wheel", onWheel, { passive: false });
        return () => node.removeEventListener("wheel", onWheel);
    }, [maxScroll, goNext, goPrev, hasInteracted]);

    const progressPct =
        ((index + (maxScroll > 0 ? scrollY / maxScroll : 0)) / MOCKUPS.length) * 100;

    return (
        <section className="portfolio">
            <div className="portfolio__header">
                <h2>Experience Our Award-Winning Web Projects</h2>
                <p>
                    Dive into our portfolio, where innovation meets design excellence,
                    creating digital experiences that leave a lasting impact.
                </p>
            </div>

            <div className="portfolio__stage">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={prevItem.id}
                        className="portfolio__side portfolio__side--left"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <img src={prevItem.image} alt={prevItem.name} draggable={false} />
                    </motion.div>
                </AnimatePresence>

                {/* laptop */}
                <div className="portfolio__laptop-wrap" ref={wrapRef}>
                    <img
                        src={laptopFrame}
                        className="portfolio__laptop-frame"
                        alt="Laptop mockup frame"
                        draggable={false}
                    />

                    <div
                        className="portfolio__screen"
                        ref={screenRef}
                        style={{
                            left: `${SCREEN_RECT.left}%`,
                            top: `${SCREEN_RECT.top}%`,
                            width: `${SCREEN_RECT.width}%`,
                            height: `${SCREEN_RECT.height}%`,
                        }}
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current.id}
                                className="portfolio__screen-inner"
                                custom={direction}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <motion.img
                                    ref={imgRef}
                                    src={current.image}
                                    alt={current.name}
                                    className="portfolio__screen-img"
                                    draggable={false}
                                    onLoad={handleImageLoad}
                                    animate={{ y: -scrollY }}
                                    transition={{ type: "tween", ease: "easeOut", duration: 0.12 }}
                                />
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence>
                            {!hasInteracted && (
                                <motion.div
                                    className="portfolio__hint"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                >
                                    Scroll to explore ↓
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* right preview */}
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={nextItem.id}
                        className="portfolio__side portfolio__side--right"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <img src={nextItem.image} alt={nextItem.name} draggable={false} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="portfolio__progress-track">
                <motion.div
                    className="portfolio__progress-fill"
                    animate={{ width: `${progressPct}%` }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                />
            </div>
        </section>
    );
}