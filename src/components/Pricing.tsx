import { motion } from 'framer-motion'

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
        name: 'Basic Website Package',
        price: '199',
        iconImg: '/Images/icon7.png',
        badgeImg: '/Images/Vector1T.png',
        footerImg: '/Images/Vector1B.png',
        features: [
            '3 Pages Website',
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
        name: 'Startup Website Package',
        price: '499',
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
            '48 to 72 hours TAT',
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
        name: 'Professional Website Package',
        price: '749',
        iconImg: '/Images/icon5.png',
        badgeImg: '/Images/Vector3T.png',
        footerImg: '/Images/Vector3B.png',
        features: [
            '8-10 Pages Website',
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
            '3 Unique Banner Design',
            '1 jQuery Slider Banner',
            'Complete W3C Certified HTML',
            '48 to 72 hours TAT',
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
        name: 'Elite Website Package',
        price: '1599',
        iconImg: '/Images/icon7.png',
        badgeImg: '/Images/Vector1T.png',
        footerImg: '/Images/Vector1B.png',
        features: [
            '10 Unique Pages Website Design',
            'Custom, Interactive, Dynamic & High End Design',
            'Customize WordPress (or) PHP Development',
            'Interactive Sliding Banners',
            '10 Stock Images',
            '10 Banner Designs',
            'Special Hover Effects',
            'Unlimited Revisions',
            'Content Management System (WordPress or Custom)',
            'Mobile Responsive',
            "10 Professional Email ID's",
            'Google Friendly Sitemap',
            'Search Engine Submission',
            'Complete W3C Certified HTML',
            'Award Winning Team of Designers & Developers',
            'Complete Deployment',
            'Value Added Services',
            'Dedicated Project Manager',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee',
            'NO MONTHLY OR ANY HIDDEN FEE',
        ],
    },
    {
        id: 'corporate',
        name: 'Corporate Website Package',
        price: '2,599.99',
        iconImg: '/Images/icon6.png',
        badgeImg: '/Images/Vector2T.png',
        footerImg: '/Images/Vector2B.png',
        features: [
            'Unlimited Pages Website Design',
            'Custom Made, Interactive, Dynamic & High End Design',
            'Customized WordPress & PHP Development',
            'Interactive Sliding Banners',
            'Up to 15 Custom Made Banner Designs',
            '15 Stock Images',
            'Unlimited Revisions',
            'Special Hover Effects',
            'Content Management System',
            'Custom Dynamic Forms (Optional)',
            'Signup Area (Newsletters, Offers, etc.)',
            'Search Bar',
            'Live Social Feeds Integration (Optional)',
            'Mobile Responsive',
            "Up to 15 Professional Email ID's",
            'Google Friendly Sitemap',
            'Search Engine Submission',
            'Complete W3C Certified HTML',
            'Award Winning Team of Designers & Developers',
            'Complete Deployment',
            'Value Added Services',
            'Dedicated Project Manager',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            'NO MONTHLY OR ANY HIDDEN FEE',
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise Plus Website Package',
        price: '4,599.99',
        iconImg: '/Images/icon5.png',
        badgeImg: '/Images/Vector3T.png',
        footerImg: '/Images/Vector3B.png',
        features: [
            'Custom Designed Homepage (6x concepts)',
            '20 Custom Designed Inner Pages',
            'Custom Made, Interactive, Dynamic & User Friendly Design',
            'Custom WordPress/PHP Development',
            'Customized CMS Integration',
            'Cross Platform Responsive (Desktop, iPhone, Android)',
            'Striking Hover Effects',
            'Interactive jQuery Slider Banner',
            '15 Premium Stock Photos',
            '10 Custom Banner Designs',
            '2 Landing Page Designs',
            'Custom Dynamic Forms',
            'Online Reservation/Appointment/Scheduling Tool',
            'Online Payment Integration',
            'Live Chat/Bot Chat Integration (Optional)',
            'Multi Lingual',
            '3rd Party API Integrations',
            'Signup Area (Newsletters, Offers, etc.)',
            'Downloadable Items (eBooks, PDFs, Podcasts, Videos)',
            'Social Media Integration (Facebook, Twitter, LinkedIn)',
            'Social Media Live Feeds Widget',
            'SEO Friendly Coding',
            'On-page SEO Configuration',
            'Search Engine Indexing (Google, Yahoo, Bing)',
            'Mailing List Plugin (Optional)',
            '2 Years Domain Registration (Optional)',
            '10 Business Email Addresses',
            'Fast Load Time',
            'Security Plugins',
            'Google Analytics Installation',
            'Google Webmaster Tool',
            'Google Friendly Sitemap',
            'W3C Certified HTML',
            'Cross Browser Compatible',
            'Complete Deployment',
            '48-72 Hours Turnaround Time',
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
                                >
                                    Purchase Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}