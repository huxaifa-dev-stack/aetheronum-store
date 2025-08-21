import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReviewCard } from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, MessageSquare, TrendingUp } from "lucide-react";

const Reviews = () => {
  const featuredReviews = [
    {
      id: "1",
      softwareName: "VS Code",
      userName: "Alex Chen",
      userAvatar: "/placeholder.svg",
      rating: 5,
      date: "2024-01-15",
      title: "Excellent development environment",
      comment: "VS Code has completely transformed my development workflow. The extensions ecosystem is incredible, and the performance is outstanding even with large codebases.",
      helpful: 42,
      verified: true
    },
    {
      id: "2", 
      softwareName: "Figma",
      userName: "Sarah Wilson",
      userAvatar: "/placeholder.svg",
      rating: 5,
      date: "2024-01-12",
      title: "Best design tool for teams",
      comment: "The collaborative features in Figma are unmatched. Real-time editing, commenting, and the component system make it perfect for design teams.",
      helpful: 38,
      verified: true
    },
    {
      id: "3",
      softwareName: "Docker",
      userName: "Mike Rodriguez",
      userAvatar: "/placeholder.svg", 
      rating: 4,
      date: "2024-01-10",
      title: "Game changer for deployment",
      comment: "Docker has simplified our deployment process significantly. Container management is smooth, though there's a learning curve for beginners.",
      helpful: 29,
      verified: false
    }
  ];

  const handleHelpful = (reviewId: string) => {
    console.log(`Marked review ${reviewId} as helpful`);
    // In a real app, this would update the helpful count via API
  };

  const reviewStats = [
    { label: "Total Reviews", value: "12,485", icon: MessageSquare },
    { label: "Average Rating", value: "4.6", icon: Star },
    { label: "Verified Reviews", value: "8,234", icon: ThumbsUp },
    { label: "This Month", value: "+342", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="section-title font-bold mb-4">Software Reviews</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read honest reviews from our community and discover the best software 
              for your needs based on real user experiences.
            </p>
          </div>

          {/* Review Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-delay-1">
            {reviewStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-3">
                    <Icon className="w-8 h-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Featured Reviews */}
          <div className="mb-16 fade-in-delay-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Reviews</h2>
              <Button variant="outline">View All Reviews</Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredReviews.map((review, index) => (
                <div 
                  key={review.id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ReviewCard review={review} onHelpful={handleHelpful} />
                </div>
              ))}
            </div>
          </div>

          {/* Review Guidelines */}
          <Card className="fade-in-delay-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Review Guidelines
              </CardTitle>
              <CardDescription>
                Help others make informed decisions with honest, detailed reviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">What makes a great review:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Be specific about features and functionality</li>
                    <li>• Share your use case and experience level</li>
                    <li>• Mention pros and cons objectively</li>
                    <li>• Include screenshots or examples when helpful</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Review badges:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      Verified Purchase
                    </Badge>
                    <Badge variant="outline">Expert Review</Badge>
                    <Badge variant="outline">Long-term User</Badge>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full md:w-auto">Write a Review</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Reviews;