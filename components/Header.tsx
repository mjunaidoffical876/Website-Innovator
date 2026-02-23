import Link from 'next/link';
import { Globe } from 'lucide-react';
import GooeyNav from './GooeyNav'
// update with your own items
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-bg gradient-bg py-4 items-center transition-all duration-300">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png" // We'll move the generated image here
            alt="Website Innovator Logo"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="relative h-16 flex items-center">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white hover:text-secondary transition-colors p-2">
            <Globe className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-white/20"></div>
          <button className="bg-secondary text-primary px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
            <Link href="#contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
