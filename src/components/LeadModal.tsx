import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLeadForm } from '../hooks/UseLeadForm'

interface LeadModalProps {
    isOpen: boolean
    onClose: () => void
    plan?: string | null
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const modalVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
        opacity: 0,
        y: 24,
        scale: 0.96,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function LeadModal({ isOpen, onClose, plan }: LeadModalProps) {
    const { formData, status, errorMessage, handleChange, submitForm, resetForm } =
        useLeadForm(plan)

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    const handleClose = () => {
        onClose()
        if (status === 'success') resetForm()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="lead-modal__backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleClose}
                >
                    <motion.div
                        className="lead-modal"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="lead-modal-title"
                    >
                        <button
                            type="button"
                            className="lead-modal__close"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <X size={20} strokeWidth={2.4} />
                        </button>

                        <h3 id="lead-modal-title" className="hero__form-title">
                            Lets Get Started
                        </h3>
                        <p className="hero__form-sub">
                            Activate <span className="hero__form-highlight">70%</span> Off Coupon
                        </p>

                        {/* Selected plan ka naam yahan dikha diya, taake user ko confirm ho jaye */}
                        {plan && (
                            <p className="hero__form-plan">
                                Selected Plan: <strong>{plan}</strong>
                            </p>
                        )}

                        {status === 'success' ? (
                            <div className="lead-modal__success">
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
                                    <p className="lead-modal__error">{errorMessage}</p>
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
            )}
        </AnimatePresence>
    )
}