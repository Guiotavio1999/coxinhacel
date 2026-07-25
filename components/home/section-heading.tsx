"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion";

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
    <motion.div
      className={align === "center" ? "text-center" : "text-left"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.1)}
    >
      {eyebrow ? (
        <motion.p
          variants={fadeUp}
          className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className="font-display text-foreground text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={
            align === "center"
              ? "text-muted mx-auto mt-4 max-w-2xl text-balance"
              : "text-muted mt-4 max-w-2xl text-balance"
          }
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
