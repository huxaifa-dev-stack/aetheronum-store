import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Book, Mail, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Send us detailed questions or feedback",
      availability: "Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM PST",
      action: "Call Now"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      availability: "Always Available",
      action: "Browse Docs"
    }
  ];

  const faqs = [
    {
      question: "How do I download software from Aetheronum?",
      answer: "Simply browse our catalog, click on the software you want, and hit the download button. For premium software, you'll need to complete the purchase process first. All downloads are secure and include installation guides."
    },
    {
      question: "Is all software on Aetheronum safe and verified?",
      answer: "Yes! Every piece of software goes through our rigorous security screening process. We scan for malware, verify digital signatures, and test compatibility. Look for the 'Verified' badge on software listings."
    },
    {
      question: "Can I get refunds for purchased software?",
      answer: "We offer a 30-day refund policy for all premium software purchases. If you're not satisfied, contact our support team with your order details, and we'll process your refund within 5 business days."
    },
    {
      question: "How do I manage my software licenses?",
      answer: "Visit your Dashboard to view all your purchased licenses, download links, and license keys. You can also transfer licenses between devices (where permitted by the software vendor) and track usage."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and cryptocurrency payments. All transactions are secured with 256-bit SSL encryption."
    },
    {
      question: "How do I report a bug or security issue?",
      answer: "For software bugs, contact the developer through the software's page. For platform issues or security concerns, email security@aetheronum.com immediately. We take security reports very seriously and respond within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="section-title font-bold mb-4">
              How can we <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our support team is here to assist you 24/7. Choose the option that works best for you.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 fade-in-delay-1">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-smooth cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-4">
                      <Clock className="w-3 h-3 mr-1" />
                      {option.availability}
                    </Badge>
                    <Button className="w-full">{option.action}</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 fade-in-delay-2">
            {/* Contact Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Describe your issue or question in detail..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Website</span>
                  <Badge variant="secondary" className="text-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Downloads</span>
                  <Badge variant="secondary" className="text-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payments</span>
                  <Badge variant="secondary" className="text-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API</span>
                  <Badge variant="secondary" className="text-yellow-600">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Maintenance
                  </Badge>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    Last updated: 2 minutes ago
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2 text-xs">
                    View Status Page →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="fade-in-delay-3">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find quick answers to common questions about Aetheronum
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-primary" />
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact */}
          <Card className="mt-12 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800 fade-in-delay-4">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Security Issues or Emergencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 dark:text-red-400 mb-4">
                If you've discovered a security vulnerability or are experiencing a critical issue 
                that affects the safety of your data or systems, please contact us immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="destructive">
                  <Mail className="w-4 h-4 mr-2" />
                  security@aetheronum.com
                </Button>
                <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Hotline
                </Button>
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

export default Support;