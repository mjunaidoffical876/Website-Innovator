import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "About Us | Top Web Design Agency",
  description: "Learn about Website Innovator, the leading digital marketing agency helping businesses scale through tailored online advertising and custom web development.",
  keywords: ["best digital agency", "about our marketing agency", "top web design company", "digital strategy experts"],
};
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 hover:bg-black group"> 
          <About />
      </div>

      <FAQ />
      <Footer />
    </main>
  );
}
