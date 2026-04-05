import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Recognition } from "@/components/sections/recognition";
import { Advisory } from "@/components/sections/advisory";
import { Insights } from "@/components/sections/insights";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Recognition />
      <Advisory />
      <Insights />
      <Footer />
    </div>
  );
}
