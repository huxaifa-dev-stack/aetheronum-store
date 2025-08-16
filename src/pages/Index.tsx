import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { SoftwareCollections } from "@/components/SoftwareCollections";
import { SoftwareCard } from "@/components/SoftwareCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Footer } from "@/components/Footer";
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Search Results Header */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {searchQuery 
                  ? `Search Results for "${searchQuery}"` 
                  : `${selectedCategory} Software`
                }
              </h2>
              <p className="text-muted-foreground mb-6">
                {filteredSoftware.length} software found
              </p>
              
              {/* Search Bar for non-hero pages */}
              <div className="max-w-xl mb-6">
                <SearchBar 
                  onSearch={handleSearch}
                  placeholder="Search software..."
                />
              </div>
            </div>
          )}

          {/* Category Filter */}
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Software Grid */}
          {filteredSoftware.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSoftware.map((software) => (
                <div key={software.id} className="animate-fade-in">
                  <SoftwareCard software={software} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No software found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="text-primary hover:underline"
                >
                  View all categories
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
