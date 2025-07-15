import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Settings, Plus, Edit, Trash2, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [productType, setProductType] = useState('book');
  const { toast } = useToast();

  // Simple password check (for demo purposes - not secure)
  const handleAuth = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Access granted",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect password.",
        variant: "destructive"
      });
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Product added successfully",
      description: "The new product has been added to the system.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="mt-12 max-w-md mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center">
              <Settings className="w-5 h-5" />
              Admin Access
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
              />
            </div>
            <Button onClick={handleAuth} className="w-full">
              Login
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Demo password: admin123
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between mb-6"
              >
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Admin Panel - Product Management
                </div>
                <div className="flex items-center gap-2">
                  {isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Add New Product */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Add New Product
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddProduct} className="space-y-4">
                      <div>
                        <Label htmlFor="product-type">Product Type</Label>
                        <Select value={productType} onValueChange={setProductType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="book">Book</SelectItem>
                            <SelectItem value="curriculum">Curriculum</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="product-title">Title</Label>
                        <Input
                          id="product-title"
                          placeholder="Product title"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="product-author">Author/Creator</Label>
                        <Input
                          id="product-author"
                          placeholder="Author or creator name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="product-description">Description</Label>
                        <Textarea
                          id="product-description"
                          placeholder="Product description"
                          className="min-h-20"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="product-price">Price ($)</Label>
                          <Input
                            id="product-price"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="product-age">Age Group</Label>
                          <Input
                            id="product-age"
                            placeholder="e.g., Ages 6-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="product-image">Image URL</Label>
                        <Input
                          id="product-image"
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Plus className="w-4 h-4" />
                        Add Product
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Manage Existing Products */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Edit className="w-5 h-5" />
                      Manage Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {/* Example existing products */}
                      <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">The ADHD Advantage</div>
                          <div className="text-xs text-muted-foreground">Book - $16.99</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">Math Adventures Curriculum</div>
                          <div className="text-xs text-muted-foreground">Curriculum - $49.99</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">Mindful Activities Workbook</div>
                          <div className="text-xs text-muted-foreground">Book - $19.99</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      View All Products
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Edit className="w-4 h-4" />
                      Bulk Edit Prices
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Plus className="w-4 h-4" />
                      Import Products
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Settings className="w-4 h-4" />
                      Site Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};