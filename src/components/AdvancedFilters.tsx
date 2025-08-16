import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Filter, X, Star } from "lucide-react";
import { categories } from "@/data/mockSoftware";

interface Filters {
  categories: string[];
  platforms: string[];
  priceRange: [number, number];
  rating: number;
  verified: boolean;
  featured: boolean;
}

interface AdvancedFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
}

export function AdvancedFilters({ filters, onFiltersChange, onReset }: AdvancedFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const platforms = ["Windows", "macOS", "Linux", "iOS", "Android"];
  
  const updateFilters = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: 'categories' | 'platforms', value: string) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    updateFilters(key, updated);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.categories.length > 0) count++;
    if (filters.platforms.length > 0) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100) count++;
    if (filters.rating > 0) count++;
    if (filters.verified) count++;
    if (filters.featured) count++;
    return count;
  };

  const activeCount = getActiveFiltersCount();

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">Advanced Filters</CardTitle>
            {activeCount > 0 && (
              <Badge variant="secondary" className="text-xs">
                {activeCount} active
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {activeCount > 0 && (
              <Button variant="ghost" size="sm" onClick={onReset}>
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Filter className="w-4 h-4 mr-1" />
              {isOpen ? "Hide" : "Show"} Filters
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {isOpen && (
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Categories</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {categories.filter(cat => cat !== "All").map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => toggleArrayFilter('categories', category)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Platforms</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {platforms.map((platform) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox
                    id={`platform-${platform}`}
                    checked={filters.platforms.includes(platform)}
                    onCheckedChange={() => toggleArrayFilter('platforms', platform)}
                  />
                  <Label htmlFor={`platform-${platform}`} className="text-sm">
                    {platform}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Minimum Rating: {filters.rating > 0 ? `${filters.rating}+ stars` : "Any"}
            </Label>
            <div className="flex items-center space-x-4">
              <Slider
                value={[filters.rating]}
                onValueChange={(value) => updateFilters('rating', value[0])}
                max={5}
                min={0}
                step={0.5}
                className="flex-1"
              />
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm ml-1">{filters.rating}</span>
              </div>
            </div>
          </div>

          {/* Other Filters */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={filters.verified}
                onCheckedChange={(checked) => updateFilters('verified', checked)}
              />
              <Label htmlFor="verified" className="text-sm">
                Verified developers only
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={filters.featured}
                onCheckedChange={(checked) => updateFilters('featured', checked)}
              />
              <Label htmlFor="featured" className="text-sm">
                Featured software only
              </Label>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
