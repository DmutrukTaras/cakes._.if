import { MessageCircle } from "lucide-react";
import Button from "./Button";
import { useContactModal } from "./ContactModal";

type CTASectionProps = {
  title: string;
  description?: string;
  buttonText?: string;
};

export default function CTASection({
  title,
  description,
  buttonText = "Написати для замовлення",
}: CTASectionProps) {
  const { openOrder } = useContactModal();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="reveal rounded-[2rem] border border-white/80 bg-cocoa p-7 text-white shadow-soft sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          {description ? <p className="mt-3 leading-7 text-white/72">{description}</p> : null}
        </div>
        <Button
          variant="secondary"
          icon={<MessageCircle size={18} />}
          className="mt-6 shrink-0 md:mt-0"
          onClick={openOrder}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
