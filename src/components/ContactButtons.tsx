import { Instagram, MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const contacts = [
  {
    label: "Написати в Instagram",
    href: siteConfig.instagram,
    icon: Instagram,
  },
  {
    label: "Написати в Telegram",
    href: siteConfig.telegram,
    icon: Send,
  },
  {
    label: "Написати у Viber",
    href: siteConfig.viber,
    icon: MessageCircle,
  },
  {
    label: "Зателефонувати",
    href: siteConfig.phoneHref,
    icon: Phone,
  },
];

type ContactButtonsProps = {
  compact?: boolean;
  stacked?: boolean;
};

export default function ContactButtons({ compact = false, stacked = false }: ContactButtonsProps) {
  const gridClass = stacked ? "grid-cols-1" : compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid gap-3 ${gridClass}`}>
      {contacts.map((contact) => {
        const Icon = contact.icon;

        return (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex min-h-16 items-center gap-3 rounded-2xl border border-rose/10 bg-white px-4 py-3 text-left font-semibold leading-5 text-cocoa shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-rose/25 hover:shadow-soft"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blush/55 text-cocoa transition group-hover:bg-cocoa group-hover:text-white">
              <Icon size={19} />
            </span>
            <span className="min-w-0 break-words">{contact.label}</span>
          </a>
        );
      })}
    </div>
  );
}
