import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Filter } from 'lucide-react';

export const BookstoreSection = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  // Placeholder book data
  const books = [
    {
      id: 1,
      title: "The ADHD Advantage",
      author: "Dale Archer",
      price: 16.99,
      rating: 4.8,
      reviews: 124,
      ageGroup: "Parent Resource",
      format: "Physical",
      category: "parent-guide",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      description: "Reframe ADHD as a gift, not a burden. Discover how to help your child thrive."
    },
    {
      id: 2,
      title: "The Way I Act",
      author: "Steve Metzger",
      price: 12.99,
      rating: 4.6,
      reviews: 89,
      ageGroup: "Ages 4-8",
      format: "Physical",
      category: "children",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      description: "A gentle story about understanding emotions and behaviors."
    },
    {
      id: 3,
      title: "Mindful Activities for ADHD",
      author: "Sarah Johnson",
      price: 19.99,
      rating: 4.9,
      reviews: 156,
      ageGroup: "Ages 6-12",
      format: "Digital",
      category: "activities",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      description: "Practical mindfulness exercises designed specifically for children with ADHD."
    },
    {
      id: 4,
      title: "Focus Games & Puzzles",
      author: "Learning Labs",
      price: 24.99,
      rating: 4.7,
      reviews: 203,
      ageGroup: "Ages 5-10",
      format: "Physical",
      category: "activities",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=600&fit=crop",
      description: "Engaging puzzles and games that build concentration skills naturally."
    },
    {
      id: 5,
      title: "Different Like Me",
      author: "Jennifer Elder",
      price: 14.99,
      rating: 4.5,
      reviews: 67,
      ageGroup: "Ages 8-12",
      format: "Physical",
      category: "children",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
      description: "Stories of famous people who think differently, inspiring young minds."
    },
    {
      id: 6,
      title: "Calm Corner Toolkit",
      author: "Therapy Resources",
      price: 29.99,
      rating: 4.8,
      reviews: 91,
      ageGroup: "All Ages",
      format: "Digital",
      category: "parent-guide",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop",
      description: "Complete guide to creating calming spaces and self-regulation strategies."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Books' },
    { value: 'children', label: 'Children\'s Books' },
    { value: 'parent-guide', label: 'Parent Resources' },
    { value: 'activities', label: 'Activities & Workbooks' }
  ];

  const filteredBooks = filterBy === 'all' 
    ? books 
    : books.filter(book => book.category === filterBy);

  return (
    <section id="bookstore" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Shop Our Books
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Carefully selected books that celebrate neurodiversity and support ADHD-friendly learning approaches.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8 justify-between items-start lg:items-center px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">Filter by:</span>
              </div>
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            {filteredBooks.map((book, index) => (
              <Card key={book.id} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-0">
                  {/* Book Cover */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                        {book.ageGroup}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant={book.format === 'Digital' ? 'default' : 'outline'} className="bg-card/90 backdrop-blur-sm">
                        {book.format}
                      </Badge>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-1 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        by {book.author}
                      </p>
                    </div>

                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {book.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="font-body text-sm text-muted-foreground">
                        {book.rating} ({book.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div className="font-heading font-bold text-xl text-primary">
                    ${book.price}
                  </div>
                  <Button variant="default" size="sm" className="group/btn">
                    <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce-gentle" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Books
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};