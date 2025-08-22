import { Software } from "@/data/mockSoftware";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Zap, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface Collection {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  software: Software[];
  color: string;
}

interface SoftwareCollectionsProps {
  allSoftware: Software[];
}

export function SoftwareCollections({ allSoftware }: SoftwareCollectionsProps) {
  const collections: Collection[] = [
    {
      title: "Editor's Choice",
      description: "Hand-picked software by our editorial team",
      icon: Crown,
      software: allSoftware.filter(s => s.verified && s.downloads > 100000).slice(0, 4),
      color: "text-yellow-500"
    },
    {
      title: "Most Downloaded",
      description: "The most popular software this month",
      icon: TrendingUp,
      software: allSoftware.sort((a, b) => b.downloads - a.downloads).slice(0, 4),
      color: "text-green-500"
    },
    {
      title: "New & Trending",
      description: "Recently released software gaining popularity",
      icon: Zap,
      software: allSoftware.filter(s => new Date(s.releaseDate) > new Date('2024-01-01')).slice(0, 4),
      color: "text-blue-500"
    },
    {
      title: "Award Winners",
      description: "Software that has won industry awards",
      icon: Award,
      software: allSoftware.filter(s => s.verified).slice(0, 4),
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Curated Collections
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover amazing software through our carefully curated collections
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {collections.map((collection, index) => (
            <div key={collection.title} className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <collection.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${collection.color} flex-shrink-0`} />
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">{collection.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base line-clamp-2">{collection.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="self-start sm:self-auto flex-shrink-0" asChild>
                  <Link to="/browse" className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm">View All</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                {collection.software.map((software) => (
                  <div key={software.id} className="animate-fade-in">
                    <SoftwareCard software={software} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}