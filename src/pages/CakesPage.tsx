import CakeCalculator from "../components/CakeCalculator";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import FillingsSection from "../components/FillingsSection";
import NumberedGallery from "../components/NumberedGallery";
import SectionTitle from "../components/SectionTitle";
import { galleryConfig } from "../data/galleryConfig";
import { pagesContent } from "../data/pagesContent";

export default function CakesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionTitle
            eyebrow="Торти"
            title={pagesContent.cakes.title}
            description={pagesContent.cakes.subtitle}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {pagesContent.cakes.types.map((type) => (
              <div key={type} className="rounded-2xl border border-rose/10 bg-white px-4 py-3 text-sm font-semibold text-cocoa shadow-sm">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CakeCalculator />
      <FillingsSection />
      <FAQSection category="cakes" />
      <NumberedGallery {...galleryConfig.cakes} maxImages={12} />
      <CTASection title="Готові обрати торт для свята?" buttonText={pagesContent.cakes.cta} />
    </>
  );
}
