import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import NumberedGallery from "../components/NumberedGallery";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { galleryConfig } from "../data/galleryConfig";
import { pagesContent } from "../data/pagesContent";

export default function CandyBarPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Кенді-бар"
          title={pagesContent.candyBar.title}
          description={pagesContent.candyBar.subtitle}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pagesContent.candyBar.desserts.map((dessert) => (
            <ProductCard
              key={dessert.title}
              title={dessert.title}
              description={dessert.description}
              image={dessert.image}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
          <SectionTitle
            title="Для яких подій підходить кенді-бар"
            description="Це гарний спосіб додати святу вибір, колір і маленькі десерти, які легко брати гостям."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {pagesContent.candyBar.events.map((event) => (
              <span key={event} className="rounded-full bg-blush/35 px-4 py-2 text-sm font-semibold text-cocoa">
                {event}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection category="bar" />
      <NumberedGallery {...galleryConfig.bar} />
      <CTASection
        title="Хочете солодкий стіл в одному стилі?"
        description="Напишіть нам дату, кількість гостей і настрій події, а ми запропонуємо формат."
        buttonText={pagesContent.candyBar.cta}
      />
    </>
  );
}
