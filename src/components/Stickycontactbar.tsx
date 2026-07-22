import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Phone, Mail } from "lucide-react"
import "./sticky-bar.css"

export default function StickyContactBar() {
    const [bounce, setBounce] = useState(false)

    useEffect(() => {
        const start = setTimeout(() => setBounce(true), 600)
        const stop = setTimeout(() => setBounce(false), 600 + 2500 * 2)
        return () => {
            clearTimeout(start)
            clearTimeout(stop)
        }
    }, [])

    return createPortal(
        <div className="sticky-bar animate-sidebar-slide">
            <a
                href="tel:111111111"
                className={`sticky-bar__pill sticky-bar__pill--round ${bounce ? "animate-sidebar-bounce" : ""}`}
                aria-label="Call Us"
            >
                <Phone size={17} className="sticky-bar__icon-svg" />
            </a>

            <a
                href="mailto:info@granitecode.com"
                className={`sticky-bar__pill sticky-bar__pill--round ${bounce ? "animate-sidebar-bounce-d1" : ""}`}
                aria-label="Email Us"
            >
                <Mail size={17} className="sticky-bar__icon-svg" />
            </a>

            <span
                className={`sticky-bar__pill sticky-bar__pill--cta ${bounce ? "animate-sidebar-bounce-d2" : ""}`}
            >
                <span className="sticky-bar__cta-text">Get Free Consultancy</span>
            </span>
        </div>,
        document.body
    )
}