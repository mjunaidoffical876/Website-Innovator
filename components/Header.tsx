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
    <header className="fixed top-0 left-0 right-0 z-50 gradient-bg py-4 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 z-10 shrink-0">
          <img
            src="/logo.png" // We'll move the generated image here
            alt="Website Innovator Logo"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="relative h-16 flex items-center max-w-full overflow-x-auto overflow-y-hidden hide-scrollbar no-scrollbar flex-1 lg:flex-none justify-center z-0 order-3 lg:order-0">
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

        <div className="flex items-center gap-2 sm:gap-4 shrink-0 z-10">
          <button className="hidden sm:block text-white hover:text-secondary transition-colors p-2">
            <Globe className="w-5 h-5" />
          </button>
          <div className="hidden sm:block w-px h-6 bg-white/20"></div>
          <button className="bg-secondary text-primary px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform">
            <Link href="#contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
