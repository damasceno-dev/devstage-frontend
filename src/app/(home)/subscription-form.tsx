'use client'
import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { postSubscriptions } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionForm = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})
export type SubscriptionSchema = z.infer<typeof subscriptionForm>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError, // Add this
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionForm),
  })
  async function onSubscribe({ name, email }: SubscriptionSchema) {
    const referrer = searchParams.get('referrer')
    try {
      const response = await postSubscriptions({
        name,
        email,
        referredId: referrer,
      })
      if (!response?.id) {
        return
      }
      router.push(`/invite/${response.id}`)
    } catch (error) {
      if (
        error &&
        typeof error === 'object' &&
        'errorMessages' in error &&
        Array.isArray(error.errorMessages) &&
        error.errorMessages.length > 0
      ) {
        setError('email', {
          type: 'manual',
          message: error.errorMessages[0],
        })
        return
      }
    }
  }
  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot inputErrors={errors} errorName="name">
          <InputIcon>
            <User />
          </InputIcon>
          <InputField
            type="text"
            placeholder="Nome completo"
            {...register('name')}
          />
        </InputRoot>
        <InputRoot inputErrors={errors} errorName="email">
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
        </InputRoot>
      </div>
      <Button type="submit">
        Confirmar <ArrowRight />{' '}
      </Button>
    </form>
  )
}
