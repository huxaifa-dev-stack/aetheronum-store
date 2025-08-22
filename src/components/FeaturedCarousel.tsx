import { Software } from "@/data/mockSoftware";
import { SoftwareCard } from "@/components/SoftwareCard";

interface FeaturedCarouselProps {
  software: Software[];
}

export function FeaturedCarousel({ software }: FeaturedCarouselProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Featured Software
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover the most popular and highly-rated applications from our verified developers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {software.map((item) => (
            <div key={item.id} className="animate-scale-in">
              <SoftwareCard software={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}