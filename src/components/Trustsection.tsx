import { motion } from "framer-motion";

import moneyBackIcon from "/Images/money-back.png";
import customerSatisfactionIcon from "/Images/customer-satisfaction.png";
import clockSupportIcon from "/Images/clock-support.png";
import craftedDesignIcon from "/Images/crafted-design.png";

interface FeatureCard {
    id: string;
    icon: string;
    title: string;
    text: string;
    featured?: boolean;
}

interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role: string;
    featured?: boolean;
}

const FEATURE_CARDS: FeatureCard[] = [
    {
        id: "money-back",
        icon: moneyBackIcon,
        title: "Money-Back Policy",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
        featured: true,
    },
    {
        id: "customer-satisfaction",
        icon: customerSatisfactionIcon,
        title: "Customer Satisfaction",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
    {
        id: "clock-support",
        icon: clockSupportIcon,
        title: "Round-the-Clock Support",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
    {
        id: "crafted-design",
        icon: craftedDesignIcon,
        title: "Custom Crafted Designs",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        id: "ahmed",
        quote:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
        name: "Ahmed R.",
        role: "Founder, Tech Startup",
    },
    {
        id: "jullie",
        quote:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
        name: "Jullie J.",
        role: "Operations Head, Fast-Growing eCommerce Store",
        featured: true,
    },
    {
        id: "lisa",
        quote:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
        name: "Lisa M.",
        role: "Marketing Director, Leading Retail Brand",
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
    return (
        <div className="ts-features">
            <div className="ts-header">
                <h2>Client-focused, innovation-driven, and results-driven.</h2>
                <p>
                    Dive into our portfolio, where innovation meets design excellence,
                    creating digital experiences that leave a lasting impact.
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
                        <p>{card.text}</p>
                    </motion.div>
                ))}
            </div>

            <div className="ts-cta">
                <button className="ts-btn ts-btn--blue">Get Started</button>
                <button className="ts-btn ts-btn--orange">Get Started</button>
            </div>
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
                            <p className="ts-author-role">{t.role}</p>
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