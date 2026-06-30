import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Share2, Globe, Camera } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success('Message sent! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: ["123 Culinary Ave", "Foodie City, FC 12345"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["info@bellavista.com", "events@bellavista.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Fri: 11am - 10pm", "Sat - Sun: 10am - 11pm"]
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-muted/50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Have a question, feedback, or want to book a private event? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background relative -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-3xl border border-border/50 flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="bg-primary p-8 rounded-3xl text-primary-foreground space-y-6">
                <h4 className="font-serif text-2xl font-bold">Follow Our Journey</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <Globe size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <Camera size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <Share2 size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 md:p-12 rounded-[40px] shadow-2xl border border-border h-full"
              >
                <h3 className="font-serif text-3xl font-bold mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Your Name</Label>
                      <Input id="contact-name" required placeholder="John Doe" className="h-12 bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input id="contact-email" type="email" required placeholder="john@example.com" className="h-12 bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input id="contact-subject" required placeholder="Table Inquiry" className="h-12 bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea id="contact-message" required placeholder="Tell us what's on your mind..." className="min-h-[180px] bg-background p-4" />
                  </div>
                  <Button disabled={isSubmitting} className="w-full h-14 rounded-full text-lg font-bold">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-muted overflow-hidden">
        <div className="w-full h-full relative group">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
            alt="Map Placeholder"
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-primary text-primary-foreground p-6 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce">
              <MapPin size={32} />
              <div>
                <h4 className="font-bold">Bella Vista</h4>
                <p className="text-sm">Find us here!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
