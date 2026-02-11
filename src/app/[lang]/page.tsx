import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import News from "@/components/News";
import Team from "@/components/Team";
import CompanyInfo from "@/components/CompanyInfo";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict} />
      <VideoSection dict={dict} lang={lang} />
      <Services dict={dict} />
      <News dict={dict} />
      <Team dict={dict} />
      <CompanyInfo dict={dict} lang={lang} />
      <ContactForm dict={dict} />
    </main>
  );
}
