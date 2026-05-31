import { MapPin, MessageCircle, PackageCheck, Truck, X } from "lucide-react";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { pagesContent } from "../data/pagesContent";
import { siteConfig } from "../data/siteConfig";
import ContactButtons from "./ContactButtons";

type ModalMode = "contacts" | "order";

type ContactModalContextValue = {
  openContacts: () => void;
  openOrder: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("useContactModal must be used inside ContactModalProvider");
  }

  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ModalMode | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (nextMode: ModalMode) => {
    setIsClosing(false);
    setMode(nextMode);
  };

  const closeModal = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setMode(null);
      setIsClosing(false);
    }, 220);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mode) closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode]);

  const value = useMemo(
    () => ({
      openContacts: () => openModal("contacts"),
      openOrder: () => openModal("order"),
    }),
    [],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <button
        className="contact-fab group fixed bottom-5 right-4 z-40 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/80 bg-white/90 px-4 py-2 font-semibold text-cocoa shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cocoa hover:text-white sm:right-6"
        type="button"
        onClick={() => openModal("contacts")}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-blush/55 text-cocoa transition group-hover:bg-white group-hover:text-cocoa">
          <MessageCircle size={18} />
        </span>
        Контакти
      </button>

      {mode ? (
        <div
          className={`modal-overlay fixed inset-0 z-[80] grid place-items-center bg-cocoa/62 p-4 backdrop-blur-sm ${
            isClosing ? "modal-overlay-out" : "modal-overlay-in"
          }`}
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className={`modal-card relative w-full overflow-hidden rounded-[2rem] border border-white/85 bg-white p-5 shadow-soft sm:p-7 ${
              mode === "order" ? "max-w-5xl" : "max-w-sm"
            } ${isClosing ? "modal-card-out" : "modal-card-in"}`}
          >
            <button
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-cream text-cocoa transition hover:bg-cocoa hover:text-white"
              type="button"
              aria-label="Закрити"
              onClick={closeModal}
            >
              <X size={18} />
            </button>

            {mode === "contacts" ? <ContactsOnlyModal /> : <OrderModalContent />}
          </div>
        </div>
      ) : null}
    </ContactModalContext.Provider>
  );
}

function ContactsOnlyModal() {
  return (
    <div className="pt-8">
      <ContactButtons stacked />
    </div>
  );
}

function OrderModalContent() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
      <div className="pr-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose">Контакти</p>
        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-cocoa sm:text-4xl">
          {pagesContent.contacts.title}
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-cocoa/68">{pagesContent.contacts.subtitle}</p>

        <div className="mt-7 grid gap-3 text-sm text-cocoa/70">
          <p className="flex items-center gap-2">
            <MapPin size={18} /> {siteConfig.city}
          </p>
          <p className="flex items-center gap-2">
            <Truck size={18} /> Доставка по місту або самовивіз за домовленістю
          </p>
          <p className="flex items-center gap-2">
            <PackageCheck size={18} /> {siteConfig.schedule}
          </p>
        </div>

        <div className="mt-7 rounded-3xl bg-cream p-5">
          <p className="font-serif text-xl font-bold text-cocoa">Що написати для замовлення</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {pagesContent.contacts.orderHints.map((hint) => (
              <span
                key={hint}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-cocoa/70"
              >
                {hint}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[1.8rem] bg-milk p-4 shadow-sm sm:p-5">
        <ContactButtons stacked />
      </div>
    </div>
  );
}
