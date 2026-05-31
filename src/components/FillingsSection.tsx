import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { fillingFilters, fillings } from "../data/fillings";
import { priceNote } from "../data/prices";
import FillingCard from "./FillingCard";
import SectionTitle from "./SectionTitle";

export default function FillingsSection() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("усі");

  const filteredFillings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return fillings.filter((filling) => {
      const matchesQuery = filling.name.toLowerCase().includes(normalizedQuery);
      const matchesFilter = activeFilter === "усі" || filling.tags.includes(activeFilter);
      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Начинки"
        title="Смаки, які легко закохують у перший шматочок"
        description="Ціни винесені в окремий data-файл, тому їх можна змінити в одному місці без редагування компонентів."
      />

      <div className="mt-8 rounded-3xl border border-rose/10 bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cocoa/38" size={18} />
          <input
            className="h-12 w-full rounded-2xl border border-rose/10 bg-milk pl-11 pr-4 text-sm outline-none transition focus:border-rose"
            placeholder="Пошук начинки за назвою"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {["усі", ...fillingFilters].map((filter) => (
            <button
              key={filter}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-cocoa text-white"
                  : "bg-cream text-cocoa/70 hover:bg-blush/50"
              }`}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredFillings.map((filling) => (
          <FillingCard key={filling.slug} filling={filling} />
        ))}
      </div>

      {filteredFillings.length === 0 ? (
        <div className="mt-8 rounded-3xl bg-white p-8 text-center text-cocoa/65 shadow-sm">
          За цим запитом начинку не знайдено. Напишіть нам, і ми підкажемо схожі смаки.
        </div>
      ) : null}

      <p className="mt-6 text-sm text-cocoa/58">{priceNote}</p>
    </section>
  );
}
