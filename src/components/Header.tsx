import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";
import { publicAsset } from "../utils/assets";
import Button from "./Button";
import { useContactModal } from "./ContactModal";

const links = [
  { label: "Торти", to: "/cakes" },
  { label: "Кенді-бар", to: "/candy-bar" },
  { label: "Набори", to: "/sets" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { openOrder } = useContactModal();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
      isActive
        ? "bg-cocoa text-white shadow-sm"
        : "text-cocoa/68 hover:bg-blush/35 hover:text-cocoa"
    }`;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-white/78 shadow-soft backdrop-blur-2xl">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-blush/35 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-peach/28 to-transparent" />

          <div className="relative flex items-center justify-between gap-4 px-3 py-2.5 sm:px-4">
            <NavLink
              to="/"
              className="group flex min-w-0 items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-rose/15 bg-white p-1 shadow-sm transition duration-500 group-hover:-rotate-3 group-hover:scale-105">
                <img
                  src={publicAsset(siteConfig.logo)}
                  alt={siteConfig.brandName}
                  className="h-full w-full rounded-xl object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-serif text-2xl font-bold leading-[1.2] text-cocoa">
                  {siteConfig.brandName}
                </span>
                <span className="mt-1 block truncate text-xs font-semibold text-cocoa/55">
                  {siteConfig.subtitle}
                </span>
              </span>
            </NavLink>

            <nav className="hidden items-center rounded-full border border-rose/10 bg-milk/70 p-1 md:flex">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} className={navLinkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <span className="hidden items-center gap-1 rounded-full bg-cream px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-rose lg:inline-flex">
                <Sparkles size={14} />
                ІФ
              </span>
              <Button className="shine px-6" onClick={openOrder}>
                Замовити
              </Button>
            </div>

            <button
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cocoa text-white shadow-sm md:hidden"
              type="button"
              aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-2 rounded-[1.7rem] border border-white/80 bg-white/92 p-3 shadow-soft backdrop-blur-2xl md:hidden">
            <nav className="grid gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                className="mt-1"
                onClick={() => {
                  setIsOpen(false);
                  openOrder();
                }}
              >
                Замовити
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
