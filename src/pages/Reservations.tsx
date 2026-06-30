import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const Reservations = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success('Reservation request sent!');
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center space-y-8 bg-card p-12 rounded-[40px] shadow-2xl border border-border"
        >
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={60} />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-4xl font-bold">Reservation Confirmed!</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We have received your reservation request. A confirmation email has been sent to your inbox. We look forward to serving you!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="rounded-full h-12" onClick={() => setIsSuccess(false)}>
              Make Another Booking
            </Button>
            <Button className="rounded-full h-12" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/events-gallery-98d27180-1782825882094.webp"
            alt="Reservations Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Table Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 font-light"
          >
            Reserve your spot for an exquisite dining experience.
          </motion.p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6">Booking Information</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  For groups larger than 10, please contact us directly by phone to ensure we can accommodate your party comfortably.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-muted/50 rounded-2xl border border-border/50">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 11:00 AM - 10:00 PM</p>
                    <p className="text-muted-foreground">Sat - Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-muted/50 rounded-2xl border border-border/50">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contact for Support</h4>
                    <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Email: reservations@bellavista.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-card p-8 md:p-12 rounded-[40px] shadow-2xl border border-border"
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-lg font-bold">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="h-14 bg-background border-border/50 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-bold">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="h-14 bg-background border-border/50 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-lg font-bold">Phone Number</Label>
                  <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="h-14 bg-background border-border/50 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="guests" className="text-lg font-bold">Number of Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input id="guests" type="number" min="1" max="10" required placeholder="2" className="h-14 bg-background border-border/50 text-lg pl-12" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="date" className="text-lg font-bold">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input id="date" type="date" required className="h-14 bg-background border-border/50 text-lg pl-12" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="time" className="text-lg font-bold">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input id="time" type="time" required className="h-14 bg-background border-border/50 text-lg pl-12" />
                  </div>
                </div>
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="requests" className="text-lg font-bold">Special Requests</Label>
                  <Textarea id="requests" placeholder="Let us know about any allergies or special occasions..." className="min-h-[120px] bg-background border-border/50 text-lg p-4" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button disabled={isSubmitting} className="w-full h-16 rounded-full text-xl font-bold shadow-xl shadow-primary/20">
                    {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                  </Button>
                  <p className="text-center text-muted-foreground mt-6 text-sm">
                    By confirming, you agree to our reservation policy. We'll hold your table for up to 15 minutes past your booking time.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
