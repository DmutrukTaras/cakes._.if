import { Heart, Sparkles, Star, Truck } from "lucide-react";
import CakeCalculator from "../components/CakeCalculator";
import CategoryCards from "../components/CategoryCards";
import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import NumberedGallery from "../components/NumberedGallery";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { galleryConfig } from "../data/galleryConfig";
import { pagesContent } from "../data/pagesContent";
import { siteConfig } from "../data/siteConfig";
import { publicAsset } from "../utils/assets";

const reasons = [
  { title: "Індивідуальний дизайн", icon: Sparkles },
  { title: "Ніжні начинки", icon: Heart },
  { title: "Свіжі десерти", icon: Star },
  { title: "Доставка або самовивіз", icon: Truck },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <CakeCalculator />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="sprinkle-frame rounded-[2rem] border border-white/80 p-4 shadow-soft sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr_1fr_0.8fr]">
            {[
              ["/images/site/cakes-preview.png", "Ягідний торт"],
              ["/images/site/cakes-lilac.png", "Лавандовий торт"],
              ["/images/site/bar-preview.png", "Кенді-бар"],
              ["/images/site/sets-preview.png", "Подарунковий набір"],
            ].map(([src, alt], index) => (
              <div
                key={src}
                className={`group overflow-hidden rounded-3xl border-4 border-white bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-soft ${
                  index % 2 === 0 ? "md:mt-8" : ""
                }`}
              >
                <img
                  src={publicAsset(src)}
                  alt={alt}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryCards />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Чому обирають нас"
          title="Десерт має бути не просто смачним, а доречним саме до вашого дня"
          description="Ми уважно ставимось до начинки, кольорів, декору і того моменту, коли торт вперше бачать гості."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="rounded-3xl border border-rose/10 bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blush/45 text-cocoa">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-cocoa">{reason.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <NumberedGallery
        folder={galleryConfig.cakes.folder}
        title="Наші роботи"
        description="Прев'ю фото з локальної папки. Більше прикладів можна додати без редагування коду."
        maxImages={12}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-rose/10 bg-white p-7 shadow-sm sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-cocoa">Більше робіт — в Instagram</h2>
            <p className="mt-3 max-w-2xl text-cocoa/68">{pagesContent.home.instagramText}</p>
          </div>
          <Button href={siteConfig.instagram} variant="secondary" className="mt-6 md:mt-0">
            {siteConfig.cta.instagram}
          </Button>
        </div>
      </section>

      <CTASection title={pagesContent.home.finalCta} />
    </>
  );
}
