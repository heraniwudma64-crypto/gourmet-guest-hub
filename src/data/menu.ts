import { MenuItem } from '../types';

export const MOCK_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Bruschetta',
    description: 'Toasted sourdough topped with wild mushrooms, truffle oil, and parmesan shavings.',
    price: 14.50,
    category: 'Appetizers',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/appetizers-ce20d41f-1782825880342.webp',
    isVegetarian: true,
    isPopular: true
  },
  {
    id: '2',
    name: 'Bella Vista Signature Steak',
    description: '28-day aged ribeye steak served with roasted garlic, bone marrow butter, and seasonal vegetables.',
    price: 42.00,
    category: 'Main Courses',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/main-course-steak-d140f93a-1782825881588.webp',
    isChefRecommendation: true,
    isPopular: true
  },
  {
    id: '3',
    name: 'Wild Mushroom Carbonara',
    description: 'Fresh fettuccine with creamy egg sauce, black truffle, and pecorino romano.',
    price: 26.00,
    category: 'Pasta',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/pasta-dish-586f2457-1782825881360.webp',
    isVegetarian: true
  },
  {
    id: '4',
    name: 'Grilled Mediterranean Lobster',
    description: 'Whole lobster tail with herb butter, charred lemon, and saffron risotto.',
    price: 54.00,
    category: 'Seafood',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/seafood-platter-3f17633e-1782825880883.webp',
    isChefRecommendation: true
  },
  {
    id: '5',
    name: 'Chocolate Lava Fondant',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean gelato and gold leaf.',
    price: 12.00,
    category: 'Desserts',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/dessert-luxury-04b12821-1782825880383.webp',
    isPopular: true
  },
  {
    id: '6',
    name: 'Artisan Latte',
    description: 'Hand-crafted latte with house-roasted beans and intricate latte art.',
    price: 5.50,
    category: 'Hot Drinks',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/coffee-art-ba773152-1782825882423.webp'
  },
  {
    id: '7',
    name: 'Spicy Wagyu Burger',
    description: 'Wagyu beef patty, pepper jack cheese, habanero aioli, and caramelized onions on a brioche bun.',
    price: 24.00,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isSpicy: true
  },
  {
    id: '8',
    name: 'Garden Harvest Salad',
    description: 'Heritage greens, roasted beets, goat cheese, candied walnuts, and balsamic reduction.',
    price: 18.00,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true
  }
];

export const CATEGORIES = [
  'All',
  'Appetizers',
  'Soups',
  'Salads',
  'Main Courses',
  'Burgers',
  'Pizza',
  'Pasta',
  'Traditional Dishes',
  'Seafood',
  'Desserts',
  'Hot Drinks',
  'Cold Drinks'
];
