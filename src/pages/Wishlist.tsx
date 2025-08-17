import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Button } from "@/components/ui/button";
import { mockSoftware, Software } from "@/data/mockSoftware";
import { Heart, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Software[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const wishlistSoftware = mockSoftware.filter(software => 
      savedWishlist.includes(software.id)
    );
    setWishlistItems(wishlistSoftware);
  }, []);

  const removeFromWishlist = (softwareId: string) => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedWishlist = savedWishlist.filter((id: string) => id !== softwareId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    setWishlistItems(prevItems => 
      prevItems.filter(item => item.id !== softwareId)
    );
  };

  const clearWishlist = () => {
    localStorage.removeItem('wishlist');
    setWishlistItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Wishlist
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Software you've saved for later
            </p>
            
            {wishlistItems.length > 0 && (
              <Button 
                variant="outline" 
                onClick={clearWishlist}
                className="mb-8"
              >
                Clear Wishlist
              </Button>
            )}
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((software) => (
                <div key={software.id} className="animate-fade-in relative">
                  <SoftwareCard software={software} />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                    onClick={() => removeFromWishlist(software.id)}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-2xl font-semibold mb-2">Your wishlist is empty</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring our software collection and save your favorites!
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to="/browse">
                    <Package className="w-4 h-4 mr-2" />
                    Browse Software
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">
                    <Heart className="w-4 h-4 mr-2" />
                    Featured Apps
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Wishlist;