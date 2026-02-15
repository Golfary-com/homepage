import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import News from "@/components/News";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict} />
      <VideoSection dict={dict} />
      <Services dict={dict} />
      <News dict={dict} lang={lang} />
      <Team dict={dict} />
      <ContactForm dict={dict} lang={lang} />
    </main>
  );
}
