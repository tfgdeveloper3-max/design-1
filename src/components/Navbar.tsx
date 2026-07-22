import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

const navContainerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1] as const,
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function Navbar() {
    return (
        <motion.header
            className="navbar animate__animated animate__fadeInDown animate__slow"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container navbar__inner">
                <motion.div className="navbar__logo" variants={itemVariants}>
                    LOGO HERE
                </motion.div>

                <motion.div className="navbar__right" variants={itemVariants}>
                    <div className="navbar__info">
                        <span className="navbar__icon navbar__icon--blue">
                            <Phone size={16} strokeWidth={2.4} />
                        </span>
                        <div className="navbar__info-text">
                            <span className="navbar__info-label">Call Us On</span>
                            <span className="navbar__info-value">(323) 968-5109</span>
                        </div>
                    </div>

                    <div className="navbar__info">
                        <span className="navbar__icon navbar__icon--blue">
                            <MapPin size={16} strokeWidth={2.4} />
                        </span>
                        <div className="navbar__info-text">
                            <span className="navbar__info-label">1234 Demo Address/5467</span>
                            <span className="navbar__info-value">Streer, Area</span>
                        </div>
                    </div>

                    <motion.button
                        className="btn btn--blue"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Let's Chat
                    </motion.button>

                    <motion.button
                        className="btn btn--yellow"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Call Now
                    </motion.button>
                </motion.div>
            </div>
        </motion.header>
    )
}