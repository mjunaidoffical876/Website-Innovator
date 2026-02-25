import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog | Insights and Strategies",
  description: "Read the latest news, updates, and marketing strategies from the experts at Website Innovator.",
};

const posts = [
  {
    id: 1,
    title: "10 Reasons Why Your Business Needs a Strategic Web Design",
    date: "Oct 15, 2026",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Master SEO in the Age of AI Content",
    date: "Nov 02, 2026",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "What is the Future of Branding: Finding Your Voice",
    date: "Dec 10, 2026",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542324816-c146e4c74070?q=80&w=1480&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      
      {/* Blog Hero section */}
      <section className="pt-40 pb-20 bg-dark text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-primary italic">Thoughts</span></h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Latest trends in digital marketing, expert tips on SEO, and stories of real businesses growing online.</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-zinc-400 text-sm font-medium mb-3">{post.date}</p>
                  <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">{post.title}</h3>
                  <div className="mt-6 flex items-center gap-2 text-primary font-bold">
                    Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
