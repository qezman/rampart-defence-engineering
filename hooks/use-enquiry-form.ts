'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { enquiryFormSchema, type EnquiryFormData } from '@/types/form'

export function useEnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: '',
      organisation: '',
      role: '',
      email: '',
      phone: '',
      country: '',
      enquiryType: 'purchase',
      message: '',
    },
  })

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      // In production: POST to /api/enquiry or Resend
      await new Promise((r) => setTimeout(r, 1200))
      console.log('Enquiry submitted:', data)
      setIsSubmitted(true)
    } catch {
      setSubmitError('Submission failed. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { form, onSubmit: form.handleSubmit(onSubmit), isSubmitted, isSubmitting, submitError }
}
