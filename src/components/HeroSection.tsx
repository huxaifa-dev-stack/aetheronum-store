import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Aetheronum
            </span>
            <br />
            <span className="text-foreground">Software Store</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up px-4">
            Discover & Download Trusted Software in One Click.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Explore our vast collection of verified applications and tools.</span>
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up px-4">
            <SearchBar 
              onSearch={onSearch}
              placeholder="Search for software, tools, or apps..."
              className="w-full"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4">
            <Button variant="hero" size="lg" className="animate-pulse-glow w-full sm:w-auto" asChild>
              <Link to="/browse">Explore Software</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/browse">Browse Categories</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Software Items</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">500K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Verified & Safe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}