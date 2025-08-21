import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid3x3, Code, Database, Shield, Zap, Palette, Globe, Cpu } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "development",
      name: "Development Tools",
      description: "IDEs, code editors, debugging tools, and development frameworks",
      icon: Code,
      count: 45,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "database",
      name: "Database & Storage",
      description: "Database management systems, data warehouses, and storage solutions",
      icon: Database,
      count: 28,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "security",
      name: "Security & Privacy",
      description: "Antivirus, VPNs, encryption tools, and security monitoring",
      icon: Shield,
      count: 32,
      color: "from-red-500 to-pink-500"
    },
    {
      id: "productivity",
      name: "Productivity Suite",
      description: "Office suites, note-taking apps, project management tools",
      icon: Zap,
      count: 38,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "design",
      name: "Design & Creative",
      description: "Graphic design, video editing, 3D modeling, and creative tools",
      icon: Palette,
      count: 41,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: "web",
      name: "Web & Browser",
      description: "Web browsers, extensions, website builders, and web tools",
      icon: Globe,
      count: 35,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "system",
      name: "System Utilities",
      description: "System optimization, file managers, backup tools, and utilities",
      icon: Cpu,
      count: 29,
      color: "from-gray-500 to-zinc-500"
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      description: "AI tools, machine learning frameworks, and automation software",
      icon: Grid3x3,
      count: 22,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="section-title font-bold mb-4">Software Categories</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive collection of software organized by category. 
              Find the perfect tools for your needs.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="group hover:shadow-lg transition-smooth cursor-pointer fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-smooth`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.count} software
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:bg-accent/20">
                        Browse →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Popular Categories */}
          <div className="mt-20 fade-in-delay-2">
            <h2 className="text-3xl font-bold text-center mb-8">Most Popular Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(0, 4).map((category) => (
                <Button 
                  key={category.id}
                  variant="outline" 
                  className="px-6 py-3 text-lg hover:bg-accent/20"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Categories;