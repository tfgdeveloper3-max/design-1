import { motion } from 'framer-motion'
import LeadModal from '../components/LeadModal'
import { useState } from 'react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.16,
            delayChildren: 0.1,
        },
    },
}

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

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="cta">
            <div className="cta__bg" />

            <motion.div
                className="container cta__inner"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h2 className="cta__title" variants={fadeUp}>
                    Require a Rapid Project Delivery?
                    <br />
                    Contact Us Now - We're Ready to Assist!
                </motion.h2>

                <motion.p className="cta__desc" variants={fadeUp}>
                    Whether you seek a brand-new website or wish to rejuvenate an
                    existing one, our dedicated customer representatives are just a
                    phone call away, eager to address your inquiries. We're
                    enthusiastic to commence your project.
                </motion.p>

                <motion.div className="cta__actions" variants={fadeUp}>
                    <motion.button
                        className="btn btn--blue btn--lg"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        className="btn btn--yellow btn--lg"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        onClick={openLiveChat}
                    >
                        Live Chat
                    </motion.button>
                </motion.div>
            </motion.div>
            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </section>
    )
}