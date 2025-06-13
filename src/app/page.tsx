import Benefits from "@/components/sections/Benefits";
import ContactForm from "@/components/sections/ContactForm";
import Hero from "@/components/sections/Hero";
import Instructions from "@/components/sections/Instructions";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      
      <Hero />
      
      <Benefits />

      <Instructions />

      <ContactForm />
      
    </main>
  );
}
