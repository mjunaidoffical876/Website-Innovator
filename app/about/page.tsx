import Header from '@/components/Header';
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
