import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadModal from "./LeadModal";

type LinkItem = { label: string; href: string };

type Section =
    | { id: string; label: string; kind: "links"; items: LinkItem[] }
    | { id: string; label: string; kind: "contact" };

const SECTIONS: Section[] = [
    {
        id: "quicklinks",
        label: "Quicklinks",
        kind: "links",
        items: [
            { label: "Home", href: "#" },
            { label: "About", href: "#" },
            { label: "Services", href: "#" },
            { label: "Portfolio", href: "#" },
            { label: "Blog", href: "#" },
        ],
    },
    {
        id: "services",
        label: "Services",
        kind: "links",
        items: [
            { label: "Branding Strategy", href: "#" },
            { label: "Digital Marketing", href: "#" },
            { label: "Website Development", href: "#" },
            { label: "Mobile Apps Development", href: "#" },
            { label: "Marketing & PR Campaigns", href: "#" },
        ],
    },
    { id: "contact", label: "Contact", kind: "contact" },
];

const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeId, setActiveId] = useState(SECTIONS[0].id);
    const active = SECTIONS.find((s) => s.id === activeId)!;

    return (
        <footer className="ftr">
            <div className="ftr__blob ftr__blob--blue" aria-hidden="true" />
            <div className="ftr__blob ftr__blob--yellow" aria-hidden="true" />
            <div className="ftr__grid-overlay" aria-hidden="true" />

            <div className="ftr__top">
                <motion.div
                    className="ftr__hero"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2>
                        Your Story
                        <br />
                        <span className="ftr__hero-gradient">Deserves to Soar.</span>
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since 1966, when designers at Letraset and James
                        Mosley, the librarian at St Bride Printing Library in London,
                        took a 1914 Cicero translation and scrambled it to make dummy
                        text for Letraset&apos;s Body Type sheets.
                    </p>

                    <button className="ftr__cta animate__animated animate__pulse animate__infinite animate__slower" onClick={() => setIsModalOpen(true)}>
                        Get Started
                        <span className="ftr__cta-arrow">→</span>
                    </button>
                </motion.div>

                <motion.div
                    className="ftr__panel"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                    <div className="ftr__tabs" role="tablist">
                        {SECTIONS.map((s) => (
                            <button
                                key={s.id}
                                role="tab"
                                aria-selected={s.id === activeId}
                                className={`ftr__tab${s.id === activeId ? " ftr__tab--active" : ""}`}
                                onClick={() => setActiveId(s.id)}
                            >
                                {s.id === activeId && (
                                    <motion.span
                                        layoutId="ftr-tab-pill"
                                        className="ftr__tab-pill"
                                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                    />
                                )}
                                <span className="ftr__tab-label">{s.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="ftr__panel-body">
                        <AnimatePresence mode="wait">
                            {active.kind === "links" ? (
                                <motion.ul
                                    key={active.id}
                                    className="ftr__link-list"
                                    variants={listVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                >
                                    {active.items.map((item) => (
                                        <motion.li key={item.label} variants={itemVariants}>
                                            <a href={item.href}>
                                                <span className="ftr__link-dot" />
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            ) : (
                                <motion.div
                                    key="contact"
                                    className="ftr__contact"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { staggerChildren: 0.08 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                >
                                    <motion.a
                                        className="ftr__contact-row"
                                        href="tel:3239685109"
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <span className="ftr__contact-icon">☎</span>
                                        (323) 968-5109
                                    </motion.a>
                                    <motion.a
                                        className="ftr__contact-row"
                                        href="mailto:info@granitecodes.com"
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <span className="ftr__contact-icon">✉</span>
                                        info@granitecodes.com
                                    </motion.a>
                                    <motion.p
                                        className="ftr__contact-note"
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        We usually reply within one business day.
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            <div className="ftr__divider" />

            <div className="ftr__bottom">
                <p>© 2026 Copyright. All Rights Reserved.</p>
                <div className="ftr__legal">
                    <a href="#">Terms &amp; Conditions</a>
                    <span className="ftr__legal-sep">|</span>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </footer>
    );
}