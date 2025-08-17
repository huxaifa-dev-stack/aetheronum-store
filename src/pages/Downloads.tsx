import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SoftwareCard } from "@/components/SoftwareCard";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { mockSoftware, Software } from "@/data/mockSoftware";
import { Button } from "@/components/ui/button";
import { Download, Trash2 } from "lucide-react";

const Downloads = () => {
  const [downloadHistory, setDownloadHistory] = useState<Array<{
    software: Software;
    downloadDate: string;
    id: string;
  }>>([]);

  useEffect(() => {
    // Load download history from localStorage
    const savedHistory = localStorage.getItem('downloadHistory');
    if (savedHistory) {
      setDownloadHistory(JSON.parse(savedHistory));
    }
  }, []);

  const clearHistory = () => {
    setDownloadHistory([]);
    localStorage.removeItem('downloadHistory');
  };

  const removeItem = (id: string) => {
    const updatedHistory = downloadHistory.filter(item => item.id !== id);
    setDownloadHistory(updatedHistory);
    localStorage.setItem('downloadHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Download History
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              View and manage your downloaded software
            </p>
            
            {downloadHistory.length > 0 && (
              <Button 
                variant="outline" 
                onClick={clearHistory}
                className="mb-8"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear History
              </Button>
            )}
          </div>

          {downloadHistory.length > 0 ? (
            <div className="space-y-6">
              {downloadHistory.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-2xl">
                      {item.software.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.software.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Downloaded on {new Date(item.downloadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => {
                        // Re-download functionality
                        window.open(item.software.downloadUrl, '_blank');
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Again
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📥</div>
              <h3 className="text-2xl font-semibold mb-2">No downloads yet</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring our software collection and download your first app!
              </p>
              <Button variant="hero" asChild>
                <a href="/">Explore Software</a>
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Downloads;