import { Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rose/10 bg-white/72">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={siteConfig.logo}
              alt={siteConfig.brandName}
              className="h-14 w-14 rounded-full border border-rose/15 object-cover"
            />
            <div>
              <p className="font-serif text-2xl font-bold leading-none text-cocoa">
                {siteConfig.brandName}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-rose">
                {siteConfig.subtitle}
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-cocoa/65">
            {siteConfig.shortDescription}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-rose">Навігація</p>
          <div className="mt-4 grid gap-2 text-sm font-medium text-cocoa/70">
            <Link to="/cakes" className="hover:text-cocoa">Торти</Link>
            <Link to="/candy-bar" className="hover:text-cocoa">Кенді-бар</Link>
            <Link to="/sets" className="hover:text-cocoa">Набори</Link>
          </div>
        </div>
        <div className="space-y-3 text-sm text-cocoa/70">
          <p className="flex items-center gap-2">
            <MapPin size={17} /> {siteConfig.city}
          </p>
          <a className="flex items-center gap-2 hover:text-cocoa" href={siteConfig.phoneHref}>
            <Phone size={17} /> {siteConfig.phone}
          </a>
          <a
            className="flex items-center gap-2 hover:text-cocoa"
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={17} /> Instagram
          </a>
          <p>{siteConfig.schedule}</p>
        </div>
      </div>
    </footer>
  );
}
