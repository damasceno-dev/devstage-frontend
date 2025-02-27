import { SubscriptionForm } from '@/app/(home)/subscription-form'
import { Radio } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'
import logo from '../../assets/logo.svg'
const CURRENT_YEAR = new Date().getFullYear()

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col gap-16 justify-center">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="devstage logo" width={108.5} height={30} />
        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl">
          <span>CodeCraft</span>
          Summit {CURRENT_YEAR}
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1/2 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purble font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de Março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>
        <Suspense
          fallback={
            <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
              <div className="animate-pulse">
                <div className="h-7 bg-gray-600 rounded w-24 mb-6" />
                <div className="space-y-3">
                  <div className="h-12 bg-gray-600 rounded" />
                  <div className="h-12 bg-gray-600 rounded" />
                </div>
                <div className="h-10 bg-gray-600 rounded mt-6" />
              </div>
            </div>
          }
        >
          <SubscriptionForm />
        </Suspense>
      </div>
    </div>
  )
}
