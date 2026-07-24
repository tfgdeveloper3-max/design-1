import { useState } from 'react'
import { motion } from 'framer-motion'
import LeadModal from './LeadModal'

type Plan = {
    id: string
    name: string
    price: string
    iconImg: string
    badgeImg: string
    footerImg: string
    features: string[]
}

const plans: Plan[] = [
    {
        id: 'basic',
        name: 'Starter Website Package',
        price: '199',
        iconImg: '/Images/icon7.png',
        badgeImg: '/Images/Vector1T.png',
        footerImg: '/Images/Vector1B.png',
        features: [
            '3 Page Website',
            '3 Banner Design',
            '5 Stock Photos',
            '1 jQuery Slider Banner',
            'FREE Google Friendly Sitemap',
            'Complete W3C Certified HTML',
            '48 to 72 hours TAT',
            'Facebook Page Design',
            'Twitter Page Design',
            'YouTube Page Design',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
        ],
    },
    {
        id: 'startup',
        name: 'Professional Website Package',
        price: '349',
        iconImg: '/Images/icon6.png',
        badgeImg: '/Images/Vector2T.png',
        footerImg: '/Images/Vector2B.png',
        features: [
            '5 Unique Pages Website',
            'CMS / Admin Panel Support',
            '8 Stock Images',
            '5 Banner Designs',
            '1 jQuery Slider Banner',
            'FREE Google Friendly Sitemap',
            'Complete W3C Certified HTML',
            'Mobile Responsive Website',
            '48 to 72 Hours TAT',
            'Facebook Page Design',
            'Twitter Page Design',
            'YouTube Page Design',
            'Complete Deployment',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
        ],
    },
    {
        id: 'professional',
        name: 'Business Website Package',
        price: '449',
        iconImg: '/Images/icon5.png',
        badgeImg: '/Images/Vector3T.png',
        footerImg: '/Images/Vector3B.png',
        features: [
            '8-10 Page Website',
            'Conceptual and Dynamic Website',
            'Online Payment Integration',
            'Online Booking Tool',
            'Content Management System',
            'Mobile Responsive Website',
            'Custom Forms',
            'Lead Capturing Forms',
            'Striking Hover Effects',
            'Newsletter Subscription',
            'Newsfeed Integration',
            'Social Media Integration',
            'Search Engine Submission',
            '5 Stock Photos',
            '3 Unique Banner Designs',
            '1 jQuery Slider Banner',
            'Complete W3C Certified HTML',
            '48 to 72 Hours TAT',
            'Facebook Page Design',
            'Twitter Page Design',
            'YouTube Page Design',
            'Complete Deployment',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
        ],
    },
    {
        id: 'elite',
        name: 'Startup Ecommerce Website Package',
        price: '699',
        iconImg: '/Images/icon7.png',
        badgeImg: '/Images/Vector1T.png',
        footerImg: '/Images/Vector1B.png',
        features: [
            'Up to 15 Unique Pages Website',
            'Conceptual and Dynamic Website',
            'Content Management System (CMS)',
            'Mobile Responsive Website',
            'Easy Product Search',
            'Product Reviews',
            'Up to 100 Products',
            'Unlimited Categories',
            'Shopping Cart Integration',
            'Payment Integration',
            'Sales & Inventory Management',
            'jQuery Slider',
            'FREE Google Friendly Sitemap',
            'Custom Email Addresses',
            'Complete W3C Certified HTML',
            'Social Media Designs',
            'Complete Deployment',
            'Dedicated Account Manager',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
        ],
    },
    {
        id: 'corporate',
        name: 'Business Ecommerce Website Package',
        price: '899',
        iconImg: '/Images/icon6.png',
        badgeImg: '/Images/Vector2T.png',
        footerImg: '/Images/Vector2B.png',
        features: [
            'Unlimited Pages',
            'Unlimited Categories',
            'Unlimited Revisions',
            'Online Payment Integration',
            'Full-Cycle Shopping Cart and Checkout',
            'Sales and Inventory Management',
            'Product Reviews',
            'Product Support Forum',
            'jQuery Slider Banner',
            'Up to 10 Custom-Made Banner Designs',
            '20 Stock Images',
            'Special Hover Effects',
            'Content Management System (CMS)',
            'Multi-Lingual Website',
            'Custom Dynamic Forms',
            'Signup Area (Newsletters, Offers, etc.)',
            'Search Bar',
            'Live Social Network Feeds Integration (Optional)',
            'Mobile Responsive Website',
            'FREE Google Friendly Sitemap',
            'Search Engine Submission',
            'Complete W3C Certified HTML',
            'Industry-Specific Team of Expert Designers and Developers',
            'Complete Deployment',
            'Dedicated Account Manager',
            'Facebook Page Design',
            'Twitter Page Design',
            'YouTube Page Design',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise Plus Website Package',
        price: '1099',
        iconImg: '/Images/icon5.png',
        badgeImg: '/Images/Vector3T.png',
        footerImg: '/Images/Vector3B.png',
        features: [
            'Unlimited Pages Website',
            'Custom-Made, Interactive, Dynamic & High-End Design',
            'Custom WordPress or Custom PHP Development',
            '1 jQuery Slider Banner',
            'Up to 10 Custom-Made Banner Designs',
            '10 Stock Images',
            'Unlimited Revisions',
            'Special Hover Effects',
            'Content Management System (CMS)',
            'Online Appointment / Scheduling / Online Ordering Integration (Optional)',
            'Online Payment Integration (Optional)',
            'Multi-Lingual Website (Optional)',
            'Custom Dynamic Forms (Optional)',
            'Signup Area (Newsletters, Offers, etc.)',
            'Search Bar',
            'Live Social Network Feeds Integration (Optional)',
            'Mobile Responsive Website',
            'FREE Google Friendly Sitemap',
            'Search Engine Submission',
            'Complete W3C Certified HTML',
            'Industry-Specific Team of Expert Designers and Developers',
            'Complete Deployment',
            'Dedicated Account Manager',
            'Facebook Page Design',
            'Twitter Page Design',
            'YouTube Page Design',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
        ],
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
    // Konsa plan select hua hai aur modal khula hai ya nahi, dono yahan track hote hain
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handlePurchaseClick = (planName: string) => {
        setSelectedPlan(planName)
        setIsModalOpen(true)
    }

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
                        At Granite Codes, we transform imaginative concepts into sophisticated designs, captivating experiences, and memorable brands.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="pricing__grid pricing__grid--six"
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
                                    <img src={plan.iconImg} alt={`${plan.name} icon`} />
                                </div>

                                <div className="pricing-card__price">
                                    <span className="pricing-card__amount">${plan.price}</span>
                                    <span className="pricing-card__period">One-time</span>
                                </div>

                                <ul className="pricing-card__features pricing-card__features--scroll">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="pricing-card__feature">
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
                                    onClick={() => handlePurchaseClick(plan.name)}
                                >
                                    Purchase Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                plan={selectedPlan}
            />
        </section>
    )
}