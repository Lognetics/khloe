import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-charcoal/10 bg-charcoal text-offwhite">
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
      </div>
    </section>
  );
}
