import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, Heart, Star, Calendar, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useState({ name: "John Doe", email: "john@example.com" });
  const [stats, setStats] = useState({
    totalDownloads: 0,
    wishlistItems: 0,
    reviewsWritten: 0,
    joinDate: "2024-01-15"
  });

  useEffect(() => {
    // Load user stats from localStorage
    const downloadHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    setStats({
      ...stats,
      totalDownloads: downloadHistory.length,
      wishlistItems: wishlist.length,
      reviewsWritten: 5 // Mock data
    });
  }, []);

  const userInitials = user.name
    .split(" ")
    .map(name => name.charAt(0))
    .join("")
    .toUpperCase();

  const recentActivity = [
    { type: "download", item: "PhotoMaster Pro", date: "2024-01-20" },
    { type: "review", item: "CodeStudio", date: "2024-01-19" },
    { type: "wishlist", item: "MediaPlayer X", date: "2024-01-18" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Member since {new Date(stats.joinDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalDownloads}</div>
              <p className="text-xs text-muted-foreground">
                Software applications
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.wishlistItems}</div>
              <p className="text-xs text-muted-foreground">
                Saved for later
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reviews Written</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.reviewsWritten}</div>
              <p className="text-xs text-muted-foreground">
                Community contributions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Member Level</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Pro</div>
              <p className="text-xs text-muted-foreground">
                Active contributor
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    {activity.type === "download" && <Download className="w-4 h-4 text-primary" />}
                    {activity.type === "review" && <Star className="w-4 h-4 text-primary" />}
                    {activity.type === "wishlist" && <Heart className="w-4 h-4 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {activity.type === "download" && "Downloaded"}
                      {activity.type === "review" && "Reviewed"}
                      {activity.type === "wishlist" && "Added to wishlist"}
                      {" "}{activity.item}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/downloads">View All Activity</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/browse">
                  <Package className="w-4 h-4 mr-2" />
                  Browse Software
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/wishlist">
                  <Heart className="w-4 h-4 mr-2" />
                  View Wishlist
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/downloads">
                  <Download className="w-4 h-4 mr-2" />
                  Download History
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Write Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;