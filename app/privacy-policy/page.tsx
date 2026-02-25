import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: "Privacy Policy | Website Innovator",
  description: "Read the Privacy Policy of Website Innovator to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      
      <section className="pt-40 pb-20 bg-dark text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Privacy <span className="text-primary italic">Policy</span></h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Your privacy is important to us.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-zinc-700 space-y-8 font-medium">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We may collect personal information such as your name, email address, phone number, and company details when you submit forms on our website or communicate with us. We also collect non-personal data through cookies and analytics tools to improve user experience.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">2. How We Use Information</h2>
            <p className="leading-relaxed">
              The information we collect is used to provide, maintain, and improve our services, communicate with you regarding your projects, send marketing and promotional materials (with your consent), and ensure the security of our website.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">3. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed">
              We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">4. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. You can also opt out of receiving promotional communications from us. Please contact us at Info@csss.org for any requests regarding your data.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
