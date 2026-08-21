import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Categories,
  Featured,
  School,
  Services,
  StoreExperience,
  Heritage,
  Reviews,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

const title = "Harmony Musicals — Instruments, Lessons & Repairs in Visakhapatnam";
const description =
  "Harmony Musicals in Visakhapatnam sells guitars, keyboards, drums and Indian classical instruments, with music lessons, repairs and rentals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Featured />
        <School />
        <Services />
        <StoreExperience />
        <Heritage />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
