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
                    <img
                        src="/Images/logo.png"
                        alt="Logo"
                        className="navbar__logo-img"
                    />
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
                            <span className="navbar__info-label">6210 Wilshire Blvd Ste 200 </span>
                            <span className="navbar__info-value">Los Angeles CA 90048</span>
                        </div>
                    </div>

                    <motion.button
                        className="btn btn--blue"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        onClick={openLiveChat}
                    >
                        Let's Chat
                    </motion.button>

                    <motion.button
                        className="btn btn--yellow"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => {
                            window.location.href = "tel:+13239685109";
                        }}
                    >
                        Call Now
                    </motion.button>
                </motion.div>
            </div>
        </motion.header>
    )
}