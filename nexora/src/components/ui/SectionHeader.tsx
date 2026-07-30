import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  index: string;
  title: string;
  description: string;
}

export function SectionHeader({
  eyebrow,
  index,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="section-heading">
      <Reveal>
        <div className="eyebrow">
          <span />
          {eyebrow} / {index}
        </div>
      </Reveal>
      <Reveal delay={0.07}>
        <h2>{title}</h2>
      </Reveal>
      <Reveal className="section-heading__copy" delay={0.14}>
        <p>{description}</p>
      </Reveal>
    </div>
  );
}
