import { useState, useEffect } from "react";
import { Software } from "@/data/mockSoftware";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Verified, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface SoftwareCardProps {
  software: Software;
}

export function SoftwareCard({ software }: SoftwareCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.includes(software.id));
  }, [software.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedWishlist = isWishlisted
      ? wishlist.filter((id: string) => id !== software.id)
      : [...wishlist, software.id];
    
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Save to download history
    const downloadItem = {
      software,
      downloadDate: new Date().toISOString(),
      id: `${software.id}-${Date.now()}`
    };
    
    const existingHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
    const updatedHistory = [downloadItem, ...existingHistory];
    localStorage.setItem('downloadHistory', JSON.stringify(updatedHistory));
    
    // Trigger download
    console.log(`Downloading ${software.name}`);
    window.open(software.downloadUrl, '_blank');
    alert(`Download started for ${software.name}`);
  };

  return (
    <Link 
      to={`/software/${software.id}`}
      className="block h-full"
    >
      <div className="group h-full p-6 rounded-xl bg-card border border-border hover-lift hover:border-primary/20 transition-smooth relative">
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={toggleWishlist}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-muted-foreground'}`} />
        </Button>
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-3xl shadow-soft group-hover:shadow-glow transition-smooth">
            {software.logo}
          </div>
        </div>

        {/* Software Info */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
              {software.name}
            </h3>
            {software.verified && (
              <Verified className="w-4 h-4 text-accent" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            by {software.developer}
          </p>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {software.description}
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">
              {software.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {software.price}
            </Badge>
          </div>
        </div>

        {/* Download Button */}
        <Button 
          variant="download" 
          size="lg" 
          className="w-full"
          onClick={handleDownload}
        >
          <Download className="w-4 h-4" />
          Download
        </Button>

        {/* Stats */}
        <div className="mt-3 text-center">
          <span className="text-xs text-muted-foreground">
            {software.downloads.toLocaleString()} downloads
          </span>
        </div>
      </div>
    </Link>
  );
}