import Image from "next/image";

type Props = {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cta?: { label: string; href: string };
  reverse?: boolean;
};

export default function StorySection({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  cta,
  reverse = false,
}: Props) {
  return (
    <section id={id} className="px-8 md:px-12 py-20 md:py-28">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto ${
          reverse ? "md:[&>:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover artwork-warm"
          />
        </div>

        {/* Text */}
        <div className="px-2 md:px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-text-tertiary mb-5">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-[40px] font-light leading-[1.25] mb-6">
            {title}
          </h2>
          <p className="text-[14px] leading-[2] text-text-secondary mb-10 max-w-md">
            {description}
          </p>
          {cta && (
            <a
              href={cta.href}
              className="inline-block text-[11px] tracking-[0.25em] uppercase border-b border-text-secondary pb-1 text-text-secondary hover:text-text hover:border-text transition-colors duration-300"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
