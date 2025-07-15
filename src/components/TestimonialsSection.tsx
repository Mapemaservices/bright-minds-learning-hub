import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Homeschool Mom of 2",
      location: "Texas",
      quote: "Finding Bright Minds was a game-changer for our family. My 8-year-old with ADHD went from struggling with traditional workbooks to absolutely loving learning time. The visual approach and movement breaks make all the difference!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael R.",
      role: "Dad & Educator",
      location: "California",
      quote: "As a former teacher, I was skeptical about homeschooling my ADHD daughter. These resources are incredibly well-designed - they understand how ADHD minds work. My daughter's confidence has soared, and she's actually ahead in several subjects now.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Jennifer L.",
      role: "Homeschool Mom",
      location: "Florida",
      quote: "The math curriculum transformed our daily battles into joyful discovery time. My son with ADHD and dyslexia is now asking for extra math problems! I never thought I'd see the day. Thank you for understanding our kids.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c669ac67?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              What Parents Are Saying
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from families who have discovered the joy of ADHD-friendly homeschooling.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body text-muted-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="font-heading font-bold text-3xl text-primary">500+</div>
                <div className="font-body text-muted-foreground">Happy Families</div>
              </div>
              <div className="space-y-2">
                <div className="font-heading font-bold text-3xl text-secondary">4.8★</div>
                <div className="font-body text-muted-foreground">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="font-heading font-bold text-3xl text-accent">98%</div>
                <div className="font-body text-muted-foreground">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};