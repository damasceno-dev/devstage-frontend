import {
  getSubscriberIdGetrankingposition,
  getSubscriberIdTotalinvitesclicks,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { totalInvites } = await getSubscriberIdTotalinvitesclicks(subscriberId)
  const { position, score } =
    await getSubscriberIdGetrankingposition(subscriberId)
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <MousePointerClick className="absolute top-3 left-3 size-5 text-purble" />
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {totalInvites}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
      </div>
      <div className="relative border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <BadgeCheck className="absolute top-3 left-3 size-5 text-purble" />
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {score}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
      </div>
      <div className="relative border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <Medal className="absolute top-3 left-3 size-5 text-purble" />
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {position}º
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
      </div>
    </div>
  )
}
