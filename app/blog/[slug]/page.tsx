import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Website Innovator Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-40 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-zinc-400 font-medium">{post.date}</p>
          </div>

          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-xl prose-zinc mx-auto">
            <p className="text-2xl text-zinc-600 leading-relaxed font-medium mb-8 italic border-l-4 border-primary pl-6">
              {post.excerpt}
            </p>
            <div className="text-zinc-700 space-y-6 leading-relaxed text-lg">
                <p>
                    In the rapidly evolving digital landscape of 2026, staying ahead requires more than just following trends—it requires a deep understanding of how technology and human behavior intersect.
                </p>
                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">The Core Concept</h2>
                <p>
                    Whether you are focusing on high-end web design or advanced SEO strategies, the goal remains the same: creating value for the user while signaling authority to search engines and AI models.
                </p>
                <p>
                    {/* Placeholder for real content that the user will add later */}
                    This is a placeholder for the detailed content of "{post.title}". In a real scenario, this would be populated with deep-dive analysis, step-by-step guides, and expert insights that Muhammad Junaid has cultivated over 5+ years in the industry.
                </p>
                <blockquote className="bg-zinc-50 p-8 rounded-2xl border-l-4 border-primary my-12">
                    "Innovation happens when we stop looking at websites as static entities and start treating them as living parts of a brand's growth story." — Muhammad Junaid
                </blockquote>
            </div>
          </div>
        </div>
      </article>

      <div className="bg-zinc-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to innovate your brand?</h2>
          <a href="/contact" className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-dark transition-all inline-block">
            Work with Website Innovator
          </a>
        </div>
      </div>

      <FAQ />
      <Footer />
    </main>
  );
}
