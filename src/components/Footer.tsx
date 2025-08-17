import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Browse Software", href: "/browse" },
      { label: "Featured Apps", href: "/" },
      { label: "New Releases", href: "/browse" },
      { label: "Download History", href: "/downloads" },
    ],
    categories: [
      { label: "Graphics & Design", href: "/browse" },
      { label: "Developer Tools", href: "/browse" },
      { label: "Productivity", href: "/browse" },
      { label: "Security", href: "/browse" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@aetheronum.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Aetheronum
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your trusted destination for discovering and downloading verified software. 
                Explore thousands of applications with one-click downloads.
              </p>
              <div className="flex space-x-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Stay updated</h4>
              <p className="text-muted-foreground">Get notified about new software releases and updates.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-smooth"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target as HTMLInputElement;
                    if (input.value) {
                      alert('Thank you for subscribing! We\'ll keep you updated.');
                      input.value = '';
                    }
                  }
                }}
              />
              <Button 
                variant="default" 
                onClick={() => {
                  const input = document.querySelector('input[type="email"]') as HTMLInputElement;
                  if (input?.value) {
                    alert('Thank you for subscribing! We\'ll keep you updated.');
                    input.value = '';
                  } else {
                    alert('Please enter a valid email address.');
                  }
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Aetheronum Software Store. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for developers and creators.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms</a>
              <a href="#" className="hover:text-primary transition-smooth">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}