import { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = [
    'Web Design',
    'Ecommerce Packages',
    'Branding',
    'Video Animation',
    'ORM',
    'SEO',
    'SMM',
]

type Plan = {
    id: string
    name: string
    price: number
    iconImg: string
    badgeImg: string
    footerImg: string
    activeCount: number
}

const features = [
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply dummy',
]

const plans: Plan[] = [
    {
        id: 'basic',
        name: 'BASIC',
        price: 199,
        iconImg: '/Images/icon7.png',
        badgeImg: '/Images/Vector1T.png',
        footerImg: '/Images/Vector1B.png',
        activeCount: 2,
    },
    {
        id: 'pro',
        name: 'PRO',
        price: 300,
        iconImg: '/Images/icon6.png',
        badgeImg: '/Images/Vector2T.png',
        footerImg: '/Images/Vector2B.png',
        activeCount: 2,
    },
    {
        id: 'premium',
        name: 'PREMIUM',
        price: 500,
        iconImg: '/Images/icon5.png',
        badgeImg: '/Images/Vector3T.png',
        footerImg: '/Images/Vector3B.png',
        activeCount: 5,
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.16,
            delayChildren: 0.15,
        },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('Web Design')

    return (
        <section className="pricing">
            <div className="container">
                <motion.div
                    className="pricing__head"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.h2 className="pricing__title" variants={fadeUp}>
                        Explore Our Pricing Packages
                    </motion.h2>
                    <motion.p className="pricing__desc" variants={fadeUp}>
                        At Web Design Avalon, we transform imaginative concepts into
                        sophisticated designs, captivating experiences, and memorable
                        brands.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="pricing__tabs"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`pricing__tab ${activeTab === tab ? 'pricing__tab--active' : ''
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    className="pricing__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            className="pricing-card"
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div
                                className="pricing-card__badge"
                                style={{ backgroundImage: `url(${plan.badgeImg})` }}
                            >
                                <span>{plan.name}</span>
                            </div>

                            <div className="pricing-card__body">
                                <div className="pricing-card__icon">
                                    <img src={plan.iconImg} alt={`${plan.name} plan icon`} />
                                </div>

                                <div className="pricing-card__price">
                                    <span className="pricing-card__amount">${plan.price}</span>
                                    <span className="pricing-card__period">Per month</span>
                                </div>

                                <ul className="pricing-card__features">
                                    {features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className={
                                                i < plan.activeCount
                                                    ? 'pricing-card__feature'
                                                    : 'pricing-card__feature pricing-card__feature--muted'
                                            }
                                        >
                                            <span className="pricing-card__dot" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div
                                className="pricing-card__footer"
                                style={{ backgroundImage: `url(${plan.footerImg})` }}
                            >
                                <motion.button
                                    className="pricing-card__cta"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    Buy Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}