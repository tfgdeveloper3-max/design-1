import { motion } from "framer-motion";

import moneyBackIcon from "/Images/money-back.png";
import customerSatisfactionIcon from "/Images/customer-satisfaction.png";
import clockSupportIcon from "/Images/clock-support.png";
import craftedDesignIcon from "/Images/crafted-design.png";
import { useState } from "react";
import LeadModal from "./LeadModal";

interface FeatureCard {
    id: string;
    icon: string;
    title: string;
    featured?: boolean;
}

interface Testimonial {
    id: string;
    quote: string;
    name: string;
    
    featured?: boolean;
}

const FEATURE_CARDS: FeatureCard[] = [
    {
        id: "money-back",
        icon: moneyBackIcon,
        title: "Money-Back Policy",
        featured: true,
    },
    {
        id: "customer-satisfaction",
        icon: customerSatisfactionIcon,
        title: "Customer Satisfaction",
    },
    {
        id: "clock-support",
        icon: clockSupportIcon,
        title: "Round-the-Clock Support",
    },
    {
        id: "crafted-design",
        icon: craftedDesignIcon,
        title: "Custom Crafted Designs",
    },
];

function openLiveChat() {
    if (typeof window === "undefined") return;

    if (window.LiveChatWidget) {
        window.LiveChatWidget.call("maximize");
        return;
    }

    const lc = (window as any).LC_API;
    if (lc && typeof lc.open_chat_window === "function") {
        lc.open_chat_window();
        return;
    }

    const selectors = [
        "#chat-widget-container button",
        "[id^='chat-widget']",
        "iframe[title*='chat' i]",
    ];
    for (const sel of selectors) {
        const el = document.querySelector<HTMLElement>(sel);
        if (el) { el.click(); return; }
    }
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: "Raymond",
        quote:
            "Outstanding service! Granite Codes transformed our outdated website into a modern masterpiece. Their attention to detail and responsiveness were exceptional. We've seen a significant boost in online traffic and engagement.",
        name: "Raymond Joy",
    },
    {
        id: "Samuel",
        quote:
            "Granite Codes's web design and development expertise exceeded our expectations. They delivered a stunning, user-friendly website that perfectly represents our brand. Their global approach truly sets them apart in the industry.",
        name: "Samuel Heart",
        featured: true,
    },
    {
        id: "Tiffany",
        quote:
            "Working with Granite Codes has been a game-changer for our business. Their mobile app development skills are top-notch, resulting in an app that our customers love. We couldn't be happier with the results.",
        name: "Tiffany Lewis",
    },
];

function Stars() {
    return (
        <span className="ts-stars" aria-hidden="true">
            {"★★★★★"}
        </span>
    );
}

export function FeatureHighlights() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="ts-features">
            <div className="ts-header">
                <h2>Achieve Professional Growth through Brand Enhancement</h2>
                <p>
                    From the initial conceptualization till the final delivery of the designs, we make sure each and every step is smooth transparent & flawless.
                </p>
            </div>

            <div className="ts-cards">
                {FEATURE_CARDS.map((card, i) => (
                    <motion.div
                        key={card.id}
                        className={`ts-card${card.featured ? " ts-card--featured" : ""}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    >
                        <div className="ts-icon-circle">
                            <img src={card.icon} alt="" />
                        </div>
                        <h3>{card.title}</h3>
                        
                    </motion.div>
                ))}
            </div>

            <div className="ts-cta">
                <button className="ts-btn ts-btn--blue" onClick={() => setIsModalOpen(true)}>Get Started</button>
                <button className="ts-btn ts-btn--orange" onClick={openLiveChat}>Live Chat</button>
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
}

export function Testimonials() {
    return (
        <div className="ts-testimonials">
            <div className="ts-header">
                <h2>
                    Brands trust us.
                    <br />
                    Loved by Clients. Proven by Results.
                </h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy
                    text ever since 1966
                </p>
            </div>

            <div className="ts-testimonial-grid">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div
                        key={t.id}
                        className={`ts-testimonial-wrap${t.featured ? " ts-testimonial-wrap--featured" : ""
                            }`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    >
                        <div className="ts-testimonial-card">
                            <p>{t.quote}</p>
                            <div className="ts-rating">
                                <Stars />
                                <span className="ts-rating-value">(5.0)</span>
                            </div>
                            <span className="ts-tail" />
                        </div>
                        <div className="ts-author">
                            <a href="#" className="ts-author-name">
                                {t.name}
                            </a>
                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function TrustSection() {
    return (
        <section className="ts">
            <FeatureHighlights />
            <Testimonials />

            
        </section>
    );
}