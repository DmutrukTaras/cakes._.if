import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { pagesContent } from "../data/pagesContent";
import { siteConfig } from "../data/siteConfig";
import { publicAsset } from "../utils/assets";
import Button from "./Button";
import { useContactModal } from "./ContactModal";

export default function Hero() {
  const { openOrder } = useContactModal();

  return (
    <section className="relative">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="reveal max-w-3xl">
          <h1 className="font-serif text-4xl font-bold leading-[1.05] text-cocoa sm:text-6xl lg:text-7xl">
            {pagesContent.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa/72">
            {pagesContent.home.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/cakes" icon={<ArrowRight size={18} />} className="shine">
              {siteConfig.cta.calculator}
            </Button>
            <Button variant="secondary" icon={<MessageCircle size={18} />} onClick={openOrder}>
              {siteConfig.cta.order}
            </Button>
          </div>
          <a
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose hover:text-cocoa"
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={17} /> Більше робіт в Instagram
          </a>
        </div>

        <div className="reveal relative min-h-[560px]">
          <div className="wow-panel rounded-[2.3rem] p-2 shadow-soft">
            <div
              className="hero-visual shine h-[560px] rounded-[2rem] border border-white/80 shadow-soft"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(255, 250, 245, 0.15), rgba(255, 255, 255, 0.45)), url("${publicAsset("/images/site/hero-cake.png")}")`,
              }}
            />
          </div>

          <div className="float-slow absolute -left-2 top-10 hidden w-36 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-soft sm:block lg:-left-10">
            <img
              src={publicAsset("/images/site/cakes-preview.png")}
              alt="Приклад торта cake._.if"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="float-delay absolute -right-2 bottom-20 hidden w-40 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-soft sm:block lg:-right-8">
            <img
              src={publicAsset("/images/site/cakes-lilac.png")}
              alt="Приклад ніжного торта"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-5 right-5 rounded-3xl border border-white/80 bg-white/88 p-5 shadow-soft backdrop-blur">
            <p className="font-serif text-2xl font-bold text-cocoa">Ніжні начинки, живий декор</p>
            <p className="mt-2 text-sm leading-6 text-cocoa/68">
              Підбираємо смак, вагу і стиль так, щоб десерт пасував саме вашому святу.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-cream px-3 py-2">
                <p className="font-serif text-2xl font-bold text-rose">14</p>
                <p className="text-[11px] font-semibold text-cocoa/58">начинок</p>
              </div>
              <div className="rounded-2xl bg-cream px-3 py-2">
                <p className="font-serif text-2xl font-bold text-rose">DM</p>
                <p className="text-[11px] font-semibold text-cocoa/58">замовлення</p>
              </div>
              <div className="rounded-2xl bg-cream px-3 py-2">
                <p className="font-serif text-2xl font-bold text-rose">ІФ</p>
                <p className="text-[11px] font-semibold text-cocoa/58">доставка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
