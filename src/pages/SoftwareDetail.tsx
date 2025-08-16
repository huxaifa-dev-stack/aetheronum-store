import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSoftwareById } from "@/data/mockSoftware";
import { Download, ArrowLeft, Calendar, HardDrive, Package, Verified, Star } from "lucide-react";

export default function SoftwareDetail() {
  const { id } = useParams<{ id: string }>();
  const software = id ? getSoftwareById(id) : null;

  if (!software) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-4">❓</div>
          <h1 className="text-3xl font-bold mb-4">Software Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The software you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // Save to download history
    const downloadItem = {
      software,
      downloadDate: new Date().toISOString(),
      id: `${software.id}-${Date.now()}`
    };
    
    const existingHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
    const updatedHistory = [downloadItem, ...existingHistory];
    localStorage.setItem('downloadHistory', JSON.stringify(updatedHistory));
    
    // Trigger download
    console.log(`Downloading ${software.name}`);
    window.open(software.downloadUrl, '_blank');
    alert(`Download started for ${software.name}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center text-4xl shadow-soft flex-shrink-0">
                {software.logo}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{software.name}</h1>
                  {software.verified && (
                    <Verified className="w-6 h-6 text-accent flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-lg text-muted-foreground mb-3">
                  by {software.developer}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{software.category}</Badge>
                  <Badge variant="outline">{software.price}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg">{software.description}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About {software.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {software.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {software.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Support */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Platform Support</h2>
              <div className="flex flex-wrap gap-2">
                {software.platform.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-sm py-1">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Download Section */}
              <div className="p-6 rounded-xl bg-card border border-border shadow-soft">
                <Button 
                  variant="download" 
                  size="xl" 
                  className="w-full mb-4"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5" />
                  Download Now
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  {software.downloads.toLocaleString()} downloads
                </div>
              </div>

              {/* Software Info */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Software Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Version</span>
                    </div>
                    <span className="text-sm font-medium">{software.version}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Size</span>
                    </div>
                    <span className="text-sm font-medium">{software.size}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Released</span>
                    </div>
                    <span className="text-sm font-medium">
                      {new Date(software.releaseDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Developer Info */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Developer</h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-lg font-semibold">
                    {software.developer.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{software.developer}</div>
                    {software.verified && (
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <Verified className="w-3 h-3" />
                        Verified Developer
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}