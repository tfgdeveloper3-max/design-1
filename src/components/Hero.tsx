import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

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

export default function Hero({ children }: { children?: ReactNode }) {
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
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            className="btn btn--yellow btn--lg"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Get Started
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

                        <form
                            className="hero__form-fields"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="tel" placeholder="Your Phone" />
                            <textarea placeholder="Enter Your Messages" rows={4} />

                            <motion.button
                                type="submit"
                                className="btn btn--dark"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            >
                                LETS GET STARTED
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}