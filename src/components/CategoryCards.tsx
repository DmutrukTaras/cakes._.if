import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import SectionTitle from "./SectionTitle";

export default function CategoryCards() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Що ми готуємо"
        title="Три солодкі напрями для різних подій"
        description="Оберіть формат, який найближчий до вашого свята, а деталі ми допоможемо продумати в повідомленнях."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.href}
            to={category.href}
            className="group overflow-hidden rounded-3xl border border-rose/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className={`${category.imageClass} h-64`} />
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-2xl font-bold text-cocoa">{category.title}</h3>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-cocoa transition group-hover:bg-cocoa group-hover:text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-cocoa/65">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
