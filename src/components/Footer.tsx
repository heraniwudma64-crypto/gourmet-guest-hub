import * as React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Clock, Share2, Globe, Camera } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-primary-foreground font-serif text-xl font-bold">
                BV
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">Bella Vista</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Experience the finest Mediterranean cuisine in an elegant atmosphere. Fresh ingredients, masterful chefs, and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-background border hover:text-primary transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border hover:text-primary transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border hover:text-primary transition-colors">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link to="/reservations" className="text-muted-foreground hover:text-primary transition-colors">Reservations</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Culinary Ave, Foodie City, FC 12345</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@bellavista.com</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Clock className="text-primary shrink-0" size={20} />
                <div>
                  <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Subscribe to receive special offers and event updates.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your email address" className="bg-background" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bella Vista Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
