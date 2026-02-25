export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png" // We'll move the generated image here
                alt="Website Innovator Logo"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <p className="text-zinc-500 leading-relaxed">
              Transforming the digital future of businesses worldwide
              with passion, innovation, and cutting-edge technology.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Our Company</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-secondary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  SEO & SEM
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">
                  E-Commerce
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>info@websiteinnovator.org</li>
              <li>+92 318 6397291</li>
              <li>Multan, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm">
          <p>© 2026 Website Innovator. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
