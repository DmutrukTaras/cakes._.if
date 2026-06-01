import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import NumberedGallery from "../components/NumberedGallery";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { galleryConfig } from "../data/galleryConfig";
import { pagesContent } from "../data/pagesContent";

export default function SetsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Набори"
          title={pagesContent.sets.title}
          description={pagesContent.sets.subtitle}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pagesContent.sets.products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              includes={product.includes}
              image={product.image}
              imageClass="preview-sets"
            />
          ))}
        </div>
      </section>

      <FAQSection category="sets" />
      <NumberedGallery {...galleryConfig.sets} />
      <CTASection
        title="Подарунок може бути дуже особистим"
        description="Підберемо склад, кольори й напис під людину, яку ви хочете потішити."
        buttonText={pagesContent.sets.cta}
      />
    </>
  );
}
