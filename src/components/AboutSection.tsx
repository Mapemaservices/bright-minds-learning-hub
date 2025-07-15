import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Users, Star } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'ADHD-Conscious Design',
      description: 'Every resource is carefully crafted with neurodiversity in mind, featuring clear organization and engaging visuals.'
    },
    {
      icon: Heart,
      title: 'Empathetic Approach',
      description: 'We understand the unique challenges and celebrate the incredible strengths of children with ADHD.'
    },
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'Supporting both children and parents with practical tools and emotional encouragement for the homeschool journey.'
    },
    {
      icon: Star,
      title: 'Proven Success',
      description: 'Trusted by hundreds of families who have seen remarkable growth in their children\'s learning and confidence.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Why We Built This
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every child deserves an education that honors their unique way of learning. 
              We're here to support families on their homeschooling journey with ADHD-friendly resources 
              that make learning joyful and accessible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  Celebrating Neurodiversity in Education
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Children with ADHD have incredible gifts—creativity, energy, and unique perspectives 
                  that can transform the world. Traditional educational approaches often overlook these 
                  strengths, but homeschooling opens up endless possibilities.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Our carefully curated books and curriculum are designed to work with your child's 
                  natural learning style, not against it. We believe that when children feel understood 
                  and supported, they flourish in ways that surprise everyone—including themselves.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="font-body text-xs text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img 
                  src={aboutImage} 
                  alt="Happy child learning at home with ADHD-friendly materials"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-card">
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-primary mb-1">98%</div>
                  <div className="font-body text-sm text-muted-foreground">Parent Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};