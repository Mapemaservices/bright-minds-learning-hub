import { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ShoppingCart, Clock, Users, BookOpen, Star } from 'lucide-react';

export const CurriculumSection = () => {
  const curriculums = [
    {
      id: 1,
      title: "ADHD-Friendly Math Adventures",
      description: "Make math fun and engaging with visual, hands-on activities that work with your child's energy and creativity.",
      ageGroup: "Ages 6-10",
      format: "PDF + Print",
      price: 49.99,
      duration: "12 weeks",
      lessons: 36,
      rating: 4.9,
      features: ["Visual Learning", "Movement Breaks", "Flexible Pacing", "Parent Guide"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      popular: true
    },
    {
      id: 2,
      title: "Creative Writing for Divergent Minds",
      description: "Unlock your child's storytelling potential with structure and freedom that celebrates unique perspectives.",
      ageGroup: "Ages 8-14",
      format: "Digital Only",
      price: 39.99,
      duration: "16 weeks",
      lessons: 48,
      rating: 4.7,
      features: ["Choice-Based", "Multi-Modal", "Self-Expression", "Confidence Building"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Science Explorers: Hands-On Discovery",
      description: "Turn your home into a science lab with experiments and discoveries that captivate curious minds.",
      ageGroup: "Ages 5-12",
      format: "PDF + Video",
      price: 59.99,
      duration: "20 weeks",
      lessons: 60,
      rating: 4.8,
      features: ["Real Experiments", "Safety First", "Wonder-Based", "Family Friendly"],
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "History Through Stories & Drama",
      description: "Bring history to life through storytelling, role-play, and creative activities that make the past feel present.",
      ageGroup: "Ages 7-13",
      format: "Complete Package",
      price: 69.99,
      duration: "24 weeks",
      lessons: 72,
      rating: 4.6,
      features: ["Story-Based", "Interactive", "Multiple Intelligences", "Timeline Activities"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              Homeschool Curriculum for Kids with ADHD
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8">
              Flexible, engaging, and ADHD-friendly lesson plans that honor your child's unique learning style 
              while building essential skills and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-card/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="font-body text-xs sm:text-sm text-foreground">Multi-Sensory Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-card/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="font-body text-xs sm:text-sm text-foreground">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2 bg-card/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="font-body text-xs sm:text-sm text-foreground">Family-Centered</span>
              </div>
            </div>
          </div>

          {/* Curriculum Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            {curriculums.map((curriculum, index) => (
              <Card key={curriculum.id} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden">
                {curriculum.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="default" className="bg-highlight text-highlight-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={curriculum.image} 
                      alt={curriculum.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                          {curriculum.ageGroup}
                        </Badge>
                        <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="font-body text-xs text-foreground">{curriculum.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                        {curriculum.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {curriculum.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
                      <div className="text-center">
                        <div className="font-heading font-semibold text-primary">{curriculum.duration}</div>
                        <div className="font-body text-xs text-muted-foreground">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="font-heading font-semibold text-secondary">{curriculum.lessons}</div>
                        <div className="font-body text-xs text-muted-foreground">Lessons</div>
                      </div>
                      <div className="text-center">
                        <div className="font-heading font-semibold text-accent">{curriculum.format}</div>
                        <div className="font-body text-xs text-muted-foreground">Format</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-heading font-medium text-sm text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {curriculum.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="font-heading font-bold text-2xl text-primary">
                    ${curriculum.price}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                      Sample
                    </Button>
                    <Button variant="default" size="sm" className="group/btn">
                      <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce-gentle" />
                      Add to Cart
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                Not Sure Which Curriculum is Right for Your Child?
              </h3>
              <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every child is unique! Schedule a free consultation with our educational specialists 
                to find the perfect fit for your family's homeschool journey.
              </p>
              <Button variant="hero" size="lg">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};