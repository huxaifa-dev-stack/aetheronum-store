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
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing software through our carefully curated collections
          </p>
        </div>

        <div className="space-y-12">
          {collections.map((collection, index) => (
            <div key={collection.title} className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <collection.icon className={`w-6 h-6 ${collection.color}`} />
                  <div>
                    <h3 className="text-2xl font-bold">{collection.title}</h3>
                    <p className="text-muted-foreground">{collection.description}</p>
                  </div>
                </div>
                <Button variant="ghost" asChild>
                  <Link to="/browse" className="flex items-center gap-2">
                    View All <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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