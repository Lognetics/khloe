import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="surface-dark border-b border-white/5">
      {/* oversized monogram watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-[-2rem] select-none font-display text-[16rem] font-semibold leading-none text-white/[0.03] md:text-[22rem]"
      >
        KO
      </span>
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <span className="eyebrow text-white/50 before:bg-gold">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="heading-xl mt-5 max-w-4xl text-4xl text-offwhite md:text-6xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={220}>{children}</Reveal>}
      </div>
    </section>
  );
}
