import { motion } from 'framer-motion'
import LeadModal from './LeadModal';
import { useState } from 'react';

const cards = [
    {
        number: '01',
        icon: '/Images/Icon1.png',
        title: 'Branding Strategy',
        desc: 'A well-optimized website ensures better rankings, enhanced user experience, and increased conversions. Our technical SEO specialists fine-tune your site to perform at its best.',
    },
    {
        number: '02',
        icon: '/Images/Icon4.png',
        title: 'Digital Marketing',
        desc: 'We leverage SEO, content marketing, and social media strategies to drive organic and paid traffic to your business, ensuring maximum visibility and engagement.',
    },
    {
        number: '03',
        icon: '/Images/Icon2.png',
        title: 'Website Development',
        desc: 'We create innovative and data-driven marketing campaigns tailored to your industry. From SEO to social media and beyond, we have got you covered.',
    },
    {
        number: '04',
        icon: '/Images/Icon3.png',
        title: 'Mobile Apps Development',
        desc: 'We create innovative and data-driven marketing campaigns tailored to your industry. From SEO to social media and beyond, we have got you covered.',
    },
]

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

const bannerContainer = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.16,
            delayChildren: 0.1,
        },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const illustrationVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.94 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
}

const gridContainer = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.14,
            delayChildren: 0.1,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="services">
            <div className="container">
                {/* Banner */}
                <motion.div
                    className="services-banner"
                    variants={bannerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="services-banner__text">
                        <motion.p className="services-banner__eyebrow" variants={fadeUp}>
                            Upgrade Your Business Prospects with Us!
                        </motion.p>
                        <motion.h2 className="services-banner__title" variants={fadeUp}>
                            A Full Spectrum of Services Tailored for Entrepreneurs and Both
                            Funded and Fund-Seeking Startups
                        </motion.h2>
                        <motion.div className="services-banner__cta" variants={fadeUp}>
                            <motion.button
                                className="btn btn--white"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setIsModalOpen(true)}
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                className="btn btn--yellow"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                onClick={openLiveChat}
                            >
                                Live Chat
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="services-banner__art"
                        variants={illustrationVariants}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
                        }}
                    >
                        <img src="/Images/Buisness.png" alt="Business team collaborating" />
                    </motion.div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="services-grid"
                    variants={gridContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.number}
                            className="service-card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="service-card__number">{card.number}</span>

                            <div className="service-card__icon">
                                <img src={card.icon} alt={`${card.title} icon`} />
                            </div>

                            <span className="service-card__tag">Discuss with Users</span>
                            <h3 className="service-card__title">{card.title}</h3>
                            <p className="service-card__desc">{card.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </section>
    )
}