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
  const handleDownload = async (e: React.MouseEvent) => {
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
    
    // Simulate download process
    try {
      // Show download started notification
      const event = new CustomEvent('showToast', {
        detail: {
          title: 'Download Started',
          description: `${software.name} download has begun...`,
          type: 'success'
        }
      });
      window.dispatchEvent(event);

      // Simulate download delay
      setTimeout(() => {
        // Create a mock download link
        const link = document.createElement('a');
        link.href = software.downloadUrl;
        link.download = `${software.name.replace(/\s+/g, '-').toLowerCase()}-v${software.version}`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show completion notification
        const completeEvent = new CustomEvent('showToast', {
          detail: {
            title: 'Download Complete',
            description: `${software.name} has been downloaded successfully!`,
            type: 'success'
          }
        });
        window.dispatchEvent(completeEvent);
      }, 1000);

    } catch (error) {
      // Show error notification
      const errorEvent = new CustomEvent('showToast', {
        detail: {
          title: 'Download Failed',
          description: `Failed to download ${software.name}. Please try again.`,
          type: 'error'
        }
      });
      window.dispatchEvent(errorEvent);
    }
  };

  return (
    <Link 
      to={`/software/${software.id}`}
      className="block h-full"
    >
      <div className="group h-full p-3 sm:p-4 lg:p-6 rounded-xl bg-card border border-border card-interactive relative hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300">
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={toggleWishlist}
        >
          <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-muted-foreground'}`} />
        </Button>
        
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-lg sm:text-2xl lg:text-3xl shadow-soft group-hover:shadow-glow transition-smooth group-hover:scale-110">
            {software.logo}
          </div>
        </div>

        {/* Software Info */}
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-1">
              {software.name}
            </h3>
            {software.verified && (
              <Verified className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
            )}
          </div>
          
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
            by {software.developer}
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-3 min-h-[2rem] sm:min-h-[2.5rem] lg:min-h-[3rem]">
            {software.description}
          </p>

          <div className="flex items-center justify-center gap-1 mb-3 flex-wrap">
            <Badge variant="secondary" className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">
              {software.category}
            </Badge>
            <Badge variant="outline" className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">
              {software.price}
            </Badge>
          </div>
        </div>

        {/* Download Button */}
        <Button 
          variant="download" 
          size="sm"
          className="w-full btn-hover-lift text-xs sm:text-sm lg:text-base h-8 sm:h-10 lg:h-12"
          onClick={handleDownload}
        >
          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Download
        </Button>

        {/* Stats */}
        <div className="mt-2 text-center">
          <span className="text-xs text-muted-foreground">
            {software.downloads.toLocaleString()} downloads
          </span>
        </div>
      </div>
    </Link>
  );
}