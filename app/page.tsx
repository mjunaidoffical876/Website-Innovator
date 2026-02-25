import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Clients />
      <Contact />

      {/* Quote Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <blockquote className="space-y-6">
            <p className="text-3xl md:text-5xl font-bold text-dark leading-tight italic">
              "In a year, you'll wish you had <span className="text-primary italic">started today</span>"
            </p>
            <footer className="text-zinc-400 font-medium text-lg">— Muhammad Junaid</footer>
          </blockquote>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
