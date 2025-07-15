import { Heart, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-xl">B</span>
                </div>
                <h3 className="font-heading font-bold text-2xl">Bright Minds Bookstore</h3>
              </div>
              <p className="font-body text-background/80 leading-relaxed max-w-md">
                Empowering homeschooling families with ADHD-friendly learning tools that celebrate 
                neurodiversity and foster joyful education at home.
              </p>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Heart className="w-4 h-4 text-accent" />
                <span>Made with love for neurodiverse families</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-lg text-background">Quick Links</h4>
              <nav className="space-y-3">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Books', href: '#bookstore' },
                  { label: 'Curriculum', href: '#curriculum' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block font-body text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-lg text-background">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm text-background/80">hello@brightminds.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-body text-sm text-background/80">(555) 123-ADHD</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-body text-sm text-background/80">Austin, TX</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h5 className="font-heading font-medium text-background mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-background/20 pt-8 mb-8">
            <div className="bg-background/5 rounded-2xl p-6 text-center">
              <h4 className="font-heading font-semibold text-xl text-background mb-2">
                Stay Connected
              </h4>
              <p className="font-body text-background/80 mb-4">
                Get weekly tips and resources for ADHD-friendly homeschooling
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:bg-primary/90 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-background/70">
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Accessibility
                </a>
              </div>
              <div className="text-sm text-background/70">
                © {currentYear} Bright Minds Bookstore. Made with ❤️ for neurodiverse families.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};