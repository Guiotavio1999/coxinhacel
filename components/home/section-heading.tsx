interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={
            align === "center"
              ? "text-muted mx-auto mt-4 max-w-2xl text-balance"
              : "text-muted mt-4 max-w-2xl text-balance"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
