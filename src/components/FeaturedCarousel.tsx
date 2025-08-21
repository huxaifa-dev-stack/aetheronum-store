import { Software } from "@/data/mockSoftware";
import { SoftwareCard } from "@/components/SoftwareCard";

interface FeaturedCarouselProps {
  software: Software[];
}

export function FeaturedCarousel({ software }: FeaturedCarouselProps) {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and highly-rated applications from our verified developers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
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