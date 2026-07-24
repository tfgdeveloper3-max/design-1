import { useCallback, useState } from 'react'

const API_URL =
    'https://leads.authorpublishers.us/api/lead/HChQkqsbsEat8wJI1MbJNmc59lrDf4sx'

export interface LeadFormData {
    name: string
    email: string
    phone_number: string
    message: string
}

const initialFormData: LeadFormData = {
    name: '',
    email: '',
    phone_number: '',
    message: '',
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

/**
 * @param plan - jis plan ke "Buy Now" button se yeh form khula hai,
 * uska naam yahan pass karo. Submit hote waqt yeh formData ke sath
 * API ko bhej diya jayega.
 */
export function useLeadForm(plan?: string | null) {
    const [formData, setFormData] = useState<LeadFormData>(initialFormData)
    const [status, setStatus] = useState<SubmitStatus>('idle')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target
            setFormData((prev) => ({ ...prev, [name]: value }))
        },
        []
    )

    const resetForm = useCallback(() => {
        setFormData(initialFormData)
        setStatus('idle')
        setErrorMessage(null)
    }, [])

    const submitForm = useCallback(
        async (e?: React.FormEvent) => {
            e?.preventDefault()

            if (!formData.name || !formData.email || !formData.phone_number) {
                setStatus('error')
                setErrorMessage('Please fill in your name, email, and phone number.')
                return
            }

            setStatus('submitting')
            setErrorMessage(null)

            try {
                const res = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        plan: plan ?? 'Not specified',
                    }),
                })

                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`)
                }

                await res.json().catch(() => null)

                setStatus('success')
                setFormData(initialFormData)
            } catch (err) {
                console.error('Lead form submission failed:', err)
                setStatus('error')
                setErrorMessage('Something went wrong. Please try again in a moment.')
            }
        },
        [formData, plan]
    )

    return { formData, status, errorMessage, handleChange, submitForm, resetForm }
}