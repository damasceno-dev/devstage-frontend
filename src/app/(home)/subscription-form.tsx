'use client'
import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionForm = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})
export type SubscriptionSchema = z.infer<typeof subscriptionForm>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionForm),
  })
  function onSubscribe(data: SubscriptionSchema) {
    console.log(data)
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
