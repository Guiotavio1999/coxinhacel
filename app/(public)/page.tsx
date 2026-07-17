import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyUs } from "@/components/home/why-us";
import { Categories } from "@/components/home/categories";
import { Testimonials } from "@/components/home/testimonials";
import { InstagramCta } from "@/components/home/instagram-cta";
import { Location } from "@/components/home/location";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyUs />
      <Categories />
      <Testimonials />
      <InstagramCta />
      <Location />
      <FinalCta />
    </>
  );
}
