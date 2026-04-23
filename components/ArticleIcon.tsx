import {
  Star,
  UserPlus,
  Shield,
  LogOut,
  Crown,
  Lightbulb,
  MessageCircle,
  CalendarDays,
  BarChart2,
  CreditCard,
  BookOpen,
  Search,
  HelpCircle,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  "dxlive-review": Star,
  "registration-guide": UserPlus,
  "safety": Shield,
  "cancellation": LogOut,
  "member-ranks": Crown,
  "tips": Lightbulb,
  "how-to-be-liked": MessageCircle,
  "events": CalendarDays,
  "av-vs-livechat": BarChart2,
  "pricing": CreditCard,
};

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  review: Star,
  guide: BookOpen,
  safety: Shield,
  rank: Crown,
  tips: Lightbulb,
  compare: BarChart2,
  event: CalendarDays,
  cancel: LogOut,
};

type Props = {
  slug?: string;
  category?: string;
  size?: number;
  className?: string;
};

export default function ArticleIcon({ slug, category, size = 32, className }: Props) {
  const Icon =
    (slug && ICON_MAP[slug]) ||
    (category && CATEGORY_ICON_MAP[category]) ||
    HelpCircle;

  return <Icon size={size} strokeWidth={1.5} className={className} />;
}
