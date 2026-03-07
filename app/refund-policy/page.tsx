import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: "Refund Policy | Website Innovator",
  description: "Our refund policy details the terms under which refunds may be issued for our digital services.",
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      
      <section className="pt-40 pb-20 bg-dark text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Refund <span className="text-primary italic">Policy</span></h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Transparency in our business relations.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-zinc-700 space-y-8 font-medium">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">1. Digital Services Scope</h2>
            <p className="leading-relaxed">
              At Website Innovator, we provide customized digital services including web design, SEO, and marketing. Since these are service-based and involve significant labor and non-recoverable costs, our refund policy is designed to be fair to both parties.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">2. Performance and Milestones</h2>
            <p className="leading-relaxed">
              Refunds are generally only considered if we fail to deliver the agreed-upon project milestones within the specified timeframe, subject to our project agreement terms. Once work has commenced or been approved at a specific milestone, that portion of the fee is non-refundable.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">3. Hosting and Third-Party Costs</h2>
            <p className="leading-relaxed">
              Fees paid for hosting, domain names, third-party software licenses, or advertising spends are strictly non-refundable as these are paid to third-party providers on your behalf.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">4. Requesting a Refund</h2>
            <p className="leading-relaxed">
              If you have any concerns regarding your project, please contact us at info@websiteinnovator.org. We are committed to achieving client satisfaction and will work with you to resolve any issues before a refund request is formalized.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
