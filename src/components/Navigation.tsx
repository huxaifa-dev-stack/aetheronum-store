import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { UserMenu } from "@/components/UserMenu";
import { Menu, X, Download, Search, Home, User, LogIn } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogin = (email: string, password: string) => {
    // Mock login - in real app, this would be an API call
    const userData = { name: "John Doe", email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Mock register - in real app, this would be an API call
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/browse", label: "Browse", icon: Search },
    { href: "/downloads", label: "Downloads", icon: Download },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aetheronum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth hover:bg-accent/10 ${
                    location.pathname === item.href 
                      ? "text-primary font-semibold bg-accent/20" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Auth Section */}
            {user ? (
              <UserMenu user={user} onLogout={handleLogout} />
            ) : (
              <Button variant="default" onClick={() => setIsAuthModalOpen(true)}>
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 fade-in bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth hover:bg-accent/10 ${
                      location.pathname === item.href 
                        ? "text-primary font-semibold bg-accent/20" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Auth */}
              {user ? (
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-3 px-3 py-2 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={handleLogout}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="default" 
                    className="w-full" 
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    </nav>
  );
}