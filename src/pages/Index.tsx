import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { SoftwareCollections } from "@/components/SoftwareCollections";
import { SoftwareCard } from "@/components/SoftwareCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { mockSoftware, getFeaturedSoftware, searchSoftware, getSoftwareByCategory } from "@/data/mockSoftware";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const featuredSoftware = getFeaturedSoftware();
  
  // Filter software based on search and category
  const filteredSoftware = (() => {
    let filtered = searchQuery ? searchSoftware(searchQuery) : mockSoftware;
    if (selectedCategory !== "All") {
      filtered = filtered.filter(software => software.category === selectedCategory);
    }
    return filtered;
  })();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory("All"); // Reset category when searching
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery(""); // Reset search when filtering by category
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Only show when no search/filter active */}
      {!searchQuery && selectedCategory === "All" && (
        <>
          <HeroSection onSearch={handleSearch} />
          <FeaturedCarousel software={featuredSoftware} />
          <SoftwareCollections allSoftware={mockSoftware} />
        </>
      )}

      {/* Main Content */}
      <main id="main-content" className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Search Results Header */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="mb-6 sm:mb-8 fade-in">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                {searchQuery 
                  ? `Search Results for "${searchQuery}"` 
                  : `${selectedCategory} Software`
                }
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
                {filteredSoftware.length} software found
              </p>
              
              {/* Search Bar for non-hero pages */}
              <div className="max-w-xl mb-4 sm:mb-6">
                <SearchBar 
                  onSearch={handleSearch}
                  placeholder="Search software..."
                />
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="fade-in-delay-1 mb-6 sm:mb-8">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Software Grid */}
          {filteredSoftware.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {filteredSoftware.map((software, index) => (
                <div 
                  key={software.id} 
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <SoftwareCard software={software} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 lg:py-16 fade-in px-4">
              <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 opacity-50">🔍</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">No software found</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-md mx-auto">
                We couldn't find any software matching your criteria. Try adjusting your search or explore different categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => setSelectedCategory("All")}
                >
                  View all categories
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
