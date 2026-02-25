import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: "Terms of Service | Website Innovator",
  description: "Read the Terms of Service for using Website Innovator's design and digital marketing services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      
      <section className="pt-40 pb-20 bg-dark text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Terms of <span className="text-primary italic">Service</span></h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Please read these terms carefully.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-zinc-700 space-y-8 font-medium">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the services provided by Website Innovator, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">2. Services Provided</h2>
            <p className="leading-relaxed">
              Website Innovator offers custom web design, SEO optimization, and digital marketing strategies. The scope, timelines, and deliverables for each project will be outlined in a separate Statement of Work (SOW) or agreement.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">3. Payment Terms</h2>
            <p className="leading-relaxed">
              Payments for services are due according to the schedule specified in your project agreement. We reserve the right to suspend or terminate services if payment is not received in a timely manner.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              Upon full payment for a project, the client retains ownership of the final website files and content provided. However, Website Innovator reserves the right to showcase the completed work in our portfolio and marketing materials. We retain ownership of all underlying code libraries, frameworks, and reusable components.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Website Innovator shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services, including loss of profits, data, or business opportunities.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
