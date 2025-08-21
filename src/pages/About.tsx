import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Shield, Zap, Award, Globe, Heart, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every software in our store is thoroughly vetted for security and reliability"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our platform is built by developers, for developers and tech enthusiasts"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "We prioritize cutting-edge tools that push the boundaries of technology"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Simple, intuitive, and delightful experiences in everything we build"
    }
  ];

  const stats = [
    { label: "Software Available", value: "2,500+", icon: Rocket },
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Countries Served", value: "120+", icon: Globe },
    { label: "Partner Developers", value: "1,200+", icon: Award }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      description: "Former tech lead at major software companies with 15+ years in the industry",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      description: "Product strategist passionate about user-centric design and innovation",
      image: "/placeholder.svg"
    },
    {
      name: "Mike Rodriguez", 
      role: "Chief Technology Officer",
      description: "Full-stack architect with expertise in scalable systems and security",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6 text-center fade-in">
          <h1 className="section-title font-bold mb-6">
            Building the Future of 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Software Discovery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Aetheronum is more than a software store—it's a curated ecosystem where 
            developers and businesses discover the tools that power innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Target className="w-5 h-5 mr-2" />
              Our Mission
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 fade-in-delay-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Icon className="w-8 h-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 fade-in-delay-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  To democratize access to high-quality software tools by creating a 
                  trusted marketplace where developers and businesses can discover, 
                  evaluate, and deploy the perfect solutions for their needs.
                </p>
                <p>
                  We believe that great software should be accessible to everyone, 
                  from solo developers building the next big thing to enterprise teams 
                  scaling their operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  To become the global standard for software discovery and distribution, 
                  powering the next generation of digital innovation through intelligent 
                  curation and community-driven insights.
                </p>
                <p>
                  We envision a world where finding the right tool is effortless, 
                  and where software creators can focus on building amazing products 
                  while we handle the rest.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-20 fade-in-delay-3">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide every decision we make and every feature we build
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="fade-in-delay-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Passionate individuals working together to revolutionize software discovery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20 fade-in-delay-5">
            <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold">Join Our Journey</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Be part of the revolution in software discovery. Whether you're a developer, 
                  business owner, or software enthusiast, we'd love to have you in our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Get Started Today
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;