import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import Button from "./Button";
import { useContactModal } from "./ContactModal";

const portionOptions = [
  {
    label: "Середній шматок",
    grams: 150,
    description: "Коли буде ще кенді-бар або багато інших частувань.",
  },
  {
    label: "Великий шматок",
    grams: 200,
    description: "Коли торт - головний десерт і хочеться щедру порцію.",
  },
];

function roundUpToHalf(value: number) {
  return Math.ceil(value * 2) / 2;
}

function CakeSliceIllustration({ active }: { active: boolean }) {
  return (
    <div className="relative h-20 w-24">
      <div className="absolute bottom-2 left-2 h-6 w-20 rounded-[50%] bg-white shadow-inner" />
      <div
        className={`absolute left-7 top-2 h-14 w-14 skew-x-[-18deg] rounded-lg border transition ${
          active ? "border-rose bg-blush" : "border-rose/20 bg-cream"
        }`}
      />
      <div className="absolute left-9 top-7 h-2 w-11 skew-x-[-18deg] rounded-full bg-rose/45" />
      <div className="absolute left-10 top-4 h-2 w-10 skew-x-[-18deg] rounded-full bg-white/85" />
      <div className="absolute left-16 top-0 h-4 w-4 rounded-full bg-honey shadow-sm" />
    </div>
  );
}

export default function CakeCalculator() {
  const [guests, setGuests] = useState(12);
  const [grams, setGrams] = useState(150);
  const { openOrder } = useContactModal();

  const result = useMemo(() => {
    const raw = (guests * grams) / 1000;
    return roundUpToHalf(raw).toLocaleString("uk-UA", {
      minimumFractionDigits: raw % 1 === 0 ? 0 : 1,
      maximumFractionDigits: 1,
    });
  }, [guests, grams]);

  const updateGuests = (next: number) => {
    setGuests(Math.max(1, Math.min(80, next)));
  };

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="reveal overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-cocoa p-7 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-peach">
              Калькулятор ваги
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Скільки торта потрібно для вашого свята?
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Вкажіть кількість гостей і бажаний розмір шматка. Це допоможе швидко зорієнтуватися перед замовленням.
            </p>
            <div className="mt-8 rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-white/68">Рекомендована вага торта:</p>
              <p className="mt-1 font-serif text-5xl font-bold">{result} кг</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <label className="text-sm font-bold text-cocoa" htmlFor="guests">
              Кількість гостей
            </label>
            <div className="mt-3 flex items-center gap-3">
              <button
                className="grid h-11 w-11 place-items-center rounded-full bg-cream text-cocoa transition hover:bg-blush/70"
                type="button"
                aria-label="Зменшити кількість гостей"
                onClick={() => updateGuests(guests - 1)}
              >
                <Minus size={18} />
              </button>
              <input
                id="guests"
                className="h-14 w-full rounded-2xl border border-rose/15 bg-milk px-4 text-center text-2xl font-bold text-cocoa outline-none focus:border-rose"
                type="number"
                min={1}
                max={80}
                value={guests}
                onChange={(event) => updateGuests(Number(event.target.value))}
              />
              <button
                className="grid h-11 w-11 place-items-center rounded-full bg-cream text-cocoa transition hover:bg-blush/70"
                type="button"
                aria-label="Збільшити кількість гостей"
                onClick={() => updateGuests(guests + 1)}
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {portionOptions.map((option) => {
                const active = grams === option.grams;

                return (
                  <button
                    key={option.grams}
                    className={`rounded-3xl border p-4 text-left transition duration-300 ${
                      active
                        ? "border-rose bg-blush/35 shadow-soft"
                        : "border-rose/10 bg-milk hover:-translate-y-0.5 hover:border-rose/25"
                    }`}
                    type="button"
                    onClick={() => setGrams(option.grams)}
                  >
                    <CakeSliceIllustration active={active} />
                    <span className="mt-3 block font-serif text-xl font-bold text-cocoa">
                      {option.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-rose">
                      {option.grams} г на людину
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-cocoa/65">
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-sm leading-6 text-cocoa/60">
              Це орієнтовний розрахунок. Фінальну вагу краще узгодити при замовленні.
            </p>
            <Button className="mt-6 w-full sm:w-auto" onClick={openOrder}>
              {siteConfig.cta.cakeOrder}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
