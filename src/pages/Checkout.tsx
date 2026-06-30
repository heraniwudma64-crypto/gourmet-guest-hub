import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Separator } from '../components/ui/separator';
import { CreditCard, Truck, Store, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [orderType, setOrderType] = React.useState<'delivery' | 'pickup'>('delivery');

  React.useEffect(() => {
    if (cart.length === 0 && !isSuccess) {
      navigate('/menu');
    }
  }, [cart, navigate, isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8 bg-card p-10 rounded-[40px] shadow-2xl border border-border"
        >
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={60} />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-4xl font-bold">Thank You!</h2>
            <p className="text-muted-foreground text-lg">
              Your order has been placed and is being prepared. We'll notify you when it's ready.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-2xl text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-bold">#BV-{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Est. Time:</span>
              <span className="font-bold">{orderType === 'delivery' ? '45-60 mins' : '20-30 mins'}</span>
            </div>
          </div>
          <Button className="w-full rounded-full h-14 text-lg" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/menu" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-bold mb-8">
        <ArrowLeft size={20} /> Back to Menu
      </Link>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-8">
            <h2 className="font-serif text-3xl font-bold">Delivery Details</h2>
            <form id="checkout-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required placeholder="John" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required placeholder="Doe" className="h-12" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required placeholder="john@example.com" className="h-12" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="h-12" />
              </div>

              <div className="md:col-span-2 space-y-4">
                <Label>Order Type</Label>
                <RadioGroup 
                  defaultValue="delivery" 
                  className="grid grid-cols-2 gap-4"
                  onValueChange={(v) => setOrderType(v as any)}
                >
                  <div>
                    <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                    <Label
                      htmlFor="delivery"
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                    >
                      <Truck className="mb-2 h-6 w-6" />
                      Delivery
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                    <Label
                      htmlFor="pickup"
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                    >
                      <Store className="mb-2 h-6 w-6" />
                      Pickup
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <AnimatePresence mode="wait">
                {orderType === 'delivery' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:col-span-2 space-y-6 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required placeholder="123 Main St" className="h-12" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required placeholder="Foodie City" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" required placeholder="12345" className="h-12" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="md:col-span-2 space-y-4 pt-4 border-t">
                <h2 className="font-serif text-3xl font-bold mb-4">Payment Method</h2>
                <RadioGroup defaultValue="card" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                    <Label
                      htmlFor="card"
                      className="flex items-center gap-3 rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all"
                    >
                      <CreditCard size={20} />
                      Card
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                    <Label
                      htmlFor="paypal"
                      className="flex items-center gap-3 rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all"
                    >
                      <span className="font-bold italic">PayPal</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
                    <Label
                      htmlFor="cash"
                      className="flex items-center gap-3 rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all"
                    >
                      Cash
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </section>
        </div>

        {/* Order Summary Side */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-[32px] p-8 sticky top-28 space-y-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold">Order Summary</h3>
            
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>{orderType === 'delivery' ? 'Delivery Fee' : 'Service Fee'}</span>
                <span>$5.00</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">${(cartTotal + 5).toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Input placeholder="Promo code" className="h-12 pr-24 rounded-full" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary font-bold px-4 hover:opacity-80 transition-opacity">
                  Apply
                </button>
              </div>
              <Button 
                type="submit" 
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full h-14 rounded-full text-lg font-bold shadow-lg shadow-primary/20"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By placing your order, you agree to Bella Vista's terms of service and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
