import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogData';

export const metadata: Metadata = {
  title: "Blog | Insights and Strategies",
  description: "Read the latest news, updates, and marketing strategies from the experts at Website Innovator.",
};

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
            {blogPosts.map((post) => (
              <a href={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-zinc-400 text-sm font-medium mb-3">{post.date}</p>
                  <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-4">{post.title}</h3>
                  <p className="text-zinc-500 mb-6 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-primary font-bold">
                    Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
