import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { AdvancedFilters } from "@/components/AdvancedFilters";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { mockSoftware, searchSoftware } from "@/data/mockSoftware";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filters, setFilters] = useState({
    categories: [] as string[],
    platforms: [] as string[],
    priceRange: [0, 100] as [number, number],
    rating: 0,
    verified: false,
    featured: false,
  });

  // Filter software based on search, category, and advanced filters
  const filteredSoftware = (() => {
    let filtered = searchQuery ? searchSoftware(searchQuery) : mockSoftware;
    
    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(software => software.category === selectedCategory);
    }
    
    // Advanced filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(software => filters.categories.includes(software.category));
    }
    
    if (filters.platforms.length > 0) {
      filtered = filtered.filter(software => 
        software.platform.some(platform => filters.platforms.includes(platform))
      );
    }
    
    if (filters.verified) {
      filtered = filtered.filter(software => software.verified);
    }
    
    if (filters.featured) {
      filtered = filtered.filter(software => software.isFeatured);
    }
    
    // Mock rating filter (since we don't have ratings in mock data)
    if (filters.rating > 0) {
      filtered = filtered.filter(() => Math.random() > 0.3); // Random filter for demo
    }
    
    return filtered;
  })();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      platforms: [],
      priceRange: [0, 100],
      rating: 0,
      verified: false,
      featured: false,
    });
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Browse Software
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Discover and download from our extensive collection of verified software
            </p>
            
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Search software, tools, or apps..."
                className="w-full"
              />
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <AdvancedFilters 
              filters={filters}
              onFiltersChange={setFilters}
              onReset={resetFilters}
            />
          </div>

          <div className="mb-6 sm:mb-8">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {filteredSoftware.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {filteredSoftware.map((software) => (
                <div key={software.id} className="animate-fade-in">
                  <SoftwareCard software={software} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">No software found</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base max-w-md mx-auto">
                Try adjusting your search terms or browse different categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-primary hover:underline text-sm sm:text-base"
                >
                  Clear search
                </button>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="text-primary hover:underline text-sm sm:text-base"
                >
                  View all categories
                </button>
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

export default Browse;