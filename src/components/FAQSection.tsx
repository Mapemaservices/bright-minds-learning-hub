import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const faqs = [
    {
      question: "What age groups is your curriculum designed for?",
      answer: "Our curriculum is designed for children ages 4-14, with specific adaptations for different developmental stages. Each curriculum package clearly indicates the target age range, and many can be easily adapted up or down based on your child's unique needs and learning pace."
    },
    {
      question: "Are your materials printable and digital-friendly?",
      answer: "Yes! Most of our resources come in multiple formats. You can choose to print physical workbooks, use digital versions on tablets, or mix both approaches. We understand that children with ADHD often benefit from variety, so we provide flexibility in how you access and use our materials."
    },
    {
      question: "Do I need to follow a specific teaching method?",
      answer: "Not at all! Our curriculum is designed to be flexible and adaptable to your family's preferred teaching style. Whether you lean toward Charlotte Mason, Unit Studies, Traditional, or Eclectic approaches, our materials can integrate seamlessly into your homeschool philosophy."
    },
    {
      question: "How do your materials specifically support children with ADHD?",
      answer: "Every resource is designed with ADHD characteristics in mind: visual learning supports, built-in movement breaks, chunked content, clear organization, choice and flexibility, positive reinforcement systems, and multi-sensory activities. We focus on strengths rather than deficits."
    },
    {
      question: "What if my child has other learning differences besides ADHD?",
      answer: "Many of our materials work beautifully for children with multiple learning differences, including dyslexia, autism, and processing disorders. The multi-sensory, flexible approach benefits diverse learners. We also provide guidance for additional accommodations."
    },
    {
      question: "Do you offer support for parents new to homeschooling?",
      answer: "Absolutely! Each curriculum includes detailed parent guides, suggested schedules, troubleshooting tips, and access to our online community. We also offer free consultations to help you get started with confidence."
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! We offer sample lessons and free downloads for most of our curriculum. You can also access our free resource library and attend our monthly webinars to get a feel for our approach before making a purchase."
    },
    {
      question: "What if the curriculum doesn't work for my child?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us for a full refund or exchange for a different curriculum that might be a better fit."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-foreground">Got Questions?</span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Everything you need to know about our ADHD-friendly homeschool resources.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg bg-background/50 backdrop-blur-sm px-4"
                  >
                    <AccordionTrigger className="font-heading font-medium text-left text-foreground hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Have Questions CTA */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-card border-border/50 p-8">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  Still Have Questions?
                </h3>
                <p className="font-body text-muted-foreground max-w-md mx-auto">
                  Our team of experienced homeschool parents and educators is here to help. 
                  Reach out anytime for personalized guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default">
                    <MessageCircle className="w-4 h-4" />
                    Contact Support
                  </Button>
                  <Button variant="outline">
                    Schedule Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};