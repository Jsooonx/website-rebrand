import {
  ArrowRight, ArrowsClockwise, CalendarBlank, ChartLineUp, ChatCircleDots,
  CirclesThreePlus, Clock, Coin, Diamond, EnvelopeSimple, FileText, FlowArrow,
  HourglassMedium, Kanban, LightbulbFilament, Lightning, LinkSimple,
  MagnifyingGlass, PaperPlaneTilt, PhoneCall, Planet, Target, User,
} from '@phosphor-icons/react'

export type MiniIconName = 'link' | 'repeat' | 'chat' | 'clock' | 'calendar' | 'board' | 'diamond' | 'target' | 'orbit' | 'rings' | 'bolt' | 'arrow' | 'phone' | 'document' | 'coin' | 'search' | 'send' | 'user' | 'mail' | 'hourglass' | 'flow' | 'bulb' | 'chart'

const icons = {
  link: LinkSimple, repeat: ArrowsClockwise, chat: ChatCircleDots, clock: Clock,
  calendar: CalendarBlank, board: Kanban, diamond: Diamond, target: Target,
  orbit: Planet, rings: CirclesThreePlus, bolt: Lightning, arrow: ArrowRight,
  phone: PhoneCall, document: FileText, coin: Coin, search: MagnifyingGlass,
  send: PaperPlaneTilt, user: User, mail: EnvelopeSimple,
  hourglass: HourglassMedium, flow: FlowArrow, bulb: LightbulbFilament,
  chart: ChartLineUp,
} satisfies Record<MiniIconName, typeof LinkSimple>

// The icon library is centralized so visual weight stays consistent across all mini UIs.
export function MiniIcon({ name }: { name: MiniIconName }) {
  const Icon = icons[name]
  return <Icon className="mini-icon" weight="fill" aria-hidden="true" />
}
