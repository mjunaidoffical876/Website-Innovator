import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: "Disclaimer | Website Innovator",
  description: "Read the legal disclaimer for using Website Innovator's website and services.",
};

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      
      <section className="pt-40 pb-20 bg-dark text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Legal <span className="text-primary italic">Disclaimer</span></h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Necessary legal clarifications.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-zinc-700 space-y-8 font-medium">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">1. Information Accuracy</h2>
            <p className="leading-relaxed">
              The information provided on websiteinnovator.org is for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">2. Results Disclaimer</h2>
            <p className="leading-relaxed">
              Any examples of past performance, case studies, or social proof shown on this website do not guarantee similar results for every project. Digital marketing and SEO results depend on numerous variables beyond our direct control, including search engine algorithm changes and market competition.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">3. External Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies or practices.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">4. Professional Advice</h2>
            <p className="leading-relaxed">
              The content on this site is not intended to be a substitute for professional business, legal, or technical advice. Any action you take based on the information provided on this website is strictly at your own risk.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
