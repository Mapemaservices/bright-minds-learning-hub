import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, Heart, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribed(true);
    toast({
      title: "Welcome to our community! 🎉",
      description: "You're now subscribed to our newsletter. Check your email for a special welcome gift!",
    });
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    
    toast({
      title: "Message sent successfully! ✉️",
      description: "We'll get back to you within 24 hours. Thank you for reaching out!",
    });
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              Stay in the Loop
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
              Join our community of homeschooling families and get tips, resources, and encouragement 
              delivered right to your inbox.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Newsletter Signup */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Weekly Newsletter
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Tips, resources, and encouragement for your homeschool journey
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4 text-accent" />
                    <span>ADHD-friendly teaching strategies</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>Community spotlights and success stories</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Send className="w-4 h-4 text-primary" />
                    <span>Early access to new resources and sales</span>
                  </div>
                </div>

                {!isSubscribed ? (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="newsletter-email" className="font-body text-sm font-medium text-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button type="submit" variant="hero" className="w-full">
                      <Mail className="w-4 h-4" />
                      Join Our Community
                    </Button>
                    <p className="font-body text-xs text-muted-foreground">
                      No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                  </form>
                ) : (
                  <div className="text-center p-6 bg-secondary-light rounded-lg">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Welcome aboard!</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Check your email for a special welcome gift. We're so glad you're here!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Get in Touch
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Have specific questions or need personalized guidance?
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-email" className="font-body text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="font-body text-sm font-medium text-foreground">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your child's learning style, your homeschool goals, or any specific challenges you're facing. We're here to help!"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" variant="default" className="w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                  
                  <p className="font-body text-xs text-muted-foreground">
                    We typically respond within 24 hours during weekdays.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};