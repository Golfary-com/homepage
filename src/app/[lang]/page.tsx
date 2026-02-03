import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import News from "@/components/News";
import CompanyInfo from "@/components/CompanyInfo";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict} lang={lang} />
      <Mission dict={dict} />
      <Services dict={dict} />
      <News dict={dict} />
      <CompanyInfo dict={dict} />
      <ContactForm dict={dict} />
    </main>
  );
}
