import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import LeadModal from '../components/LeadModal'
import { useState } from 'react'

const servicesLeft = [
    'Website Design & Development',
    'Web Application Development',
    'Website Maintenance',
    'Branding And Stationary Design',
    'Search Engine Optimization',
]

const servicesRight = [
    'Ecommerce Website Development',
    'Mobile Application Development',
    'Domain and Hosting',
    'Video Animation',
]

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

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const collageVariants = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.22,
            delayChildren: 0.15,
        },
    },
}

const cardBack = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const cardFront = {
    hidden: { opacity: 0, scale: 0.85, rotate: 6, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 },
    },
}

const cardBottom = {
    hidden: { opacity: 0, scale: 0.85, rotate: -8, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
}

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="about">
            <div className="container about__inner">
                <motion.div
                    className="about__collage"
                    variants={collageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="about__card about__card--back"
                        variants={cardBack}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                        }}
                    >
                        <img src="/Images/About1.jpg" alt="Hauzz property platform preview" />
                    </motion.div>

                    <motion.div
                        className="about__card about__card--front"
                        variants={cardFront}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
                        }}
                    >
                        <img src="/Images/About2.jpg" alt="B.lady fashion site preview" />
                    </motion.div>

                    <motion.div
                        className="about__card about__card--bottom"
                        variants={cardBottom}
                        animate={{ y: [0, -9, 0] }}
                        transition={{
                            y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
                        }}
                    >
                        <img src="/Images/About3.jpg" alt="Wooru fashion shop preview" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about__content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <motion.h2 className="about__title" variants={fadeUp}>
                        In the ever-connected,
                        <br />
                        attention-challenged digital era.
                    </motion.h2>

                    <motion.p className="about__desc" variants={fadeUp}>
                        Web Design Avalon specializes in creating captivating brand
                        experiences that inspire audiences that truly count.
                    </motion.p>

                    <motion.div className="about__services" variants={fadeUp}>
                        <ul className="about__services-col">
                            {servicesLeft.map((item) => (
                                <li key={item} className="about__service">
                                    <span className="about__service-icon">
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="about__services-col">
                            {servicesRight.map((item) => (
                                <li key={item} className="about__service">
                                    <span className="about__service-icon">
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <motion.button
                            className="btn btn--blue about__cta"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get Started
                            <ArrowRight size={16} strokeWidth={2.4} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}