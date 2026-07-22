import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLeadForm } from '../hooks/UseLeadForm'
import LeadModal from '../components/LeadModal'

const features = [
    'Expand Your Online Presence Globally',
    'Crafting Responsive, User-Centric Websites',
    'Connect, Expand, and Maintain Your Audience',
    'Enjoy Full 100% Ownership',
]

const copyContainer = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.18,
            delayChildren: 0.3,
        },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const formVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.96 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 },
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

export default function Hero({ children }: { children?: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { formData, status, errorMessage, handleChange, submitForm } = useLeadForm()

    return (
        <section className="hero">
            <div className="hero__bg" />
            <div className="hero__overlay" />

            {children}

            <div className="container hero__content">
                <motion.div
                    className="hero__copy"
                    variants={copyContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className="hero__title" variants={fadeUp}>
                        Web Designs Starts
                        <br />
                        from <span className="hero__title-accent">$149 ONLY</span>
                    </motion.h1>

                    <motion.p className="hero__desc" variants={fadeUp}>
                        Web Design Avalon is your versatile platform for crafting stunning,
                        interactive websites, catering to personal blogs, e-commerce shops,
                        corporate sites, and custom web applications, all designed to
                        captivate your audience.
                    </motion.p>

                    <motion.ul className="hero__features" variants={copyContainer}>
                        {features.map((feature) => (
                            <motion.li key={feature} className="hero__feature" variants={fadeUp}>
                                <span className="hero__feature-icon">
                                    <Check size={13} strokeWidth={3.2} />
                                </span>
                                {feature}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div className="hero__cta" variants={fadeUp}>
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

                <motion.div
                    className="hero__form-wrap"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="hero__form animate__animated animate__fadeIn animate__slow"
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1.6,
                        }}
                    >
                        <h3 className="hero__form-title">Lets Get Started</h3>
                        <p className="hero__form-sub">
                            Activate <span className="hero__form-highlight">70%</span> Off Coupon
                        </p>

                        {status === 'success' ? (
                            <div className="hero__form-success">
                                <p>Thanks! Your message has been sent. We&apos;ll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form className="hero__form-fields" onSubmit={submitForm}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone_number"
                                    placeholder="Your Phone"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Messages"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                                {status === 'error' && errorMessage && (
                                    <p className="hero__form-error">{errorMessage}</p>
                                )}

                                <motion.button
                                    type="submit"
                                    className="btn btn--dark"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'SENDING...' : 'LETS GET STARTED'}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}