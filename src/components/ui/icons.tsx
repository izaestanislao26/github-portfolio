import {
  Briefcase,
  PenLine,
  Presentation,
  GraduationCap,
  School,
  Award,
  Workflow,
  Bot,
  Trophy,
  Gavel,
  FileText,
  Scale,
  ListChecks,
  Paintbrush,
  Users,
  Mic,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../../data/content'

const map: Record<IconName, LucideIcon> = {
  briefcase: Briefcase,
  edit: PenLine,
  teacher: Presentation,
  graduation: GraduationCap,
  school: School,
  certificate: Award,
  project: Workflow,
  robot: Bot,
  trophy: Trophy,
  gavel: Gavel,
  file: FileText,
  scale: Scale,
  tasks: ListChecks,
  brush: Paintbrush,
  users: Users,
}

export function Icon({ name, className }: { name: IconName | 'mic'; className?: string }) {
  const Cmp = name === 'mic' ? Mic : map[name]
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />
}
