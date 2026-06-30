export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  isChefRecommendation?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  email: string;
  phone: string;
  type: 'delivery' | 'pickup';
  paymentMethod: string;
  status: 'pending' | 'preparing' | 'delivered' | 'cancelled';
  createdAt: string;
}
