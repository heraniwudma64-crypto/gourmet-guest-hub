import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, toggleCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
                <ShoppingBag className="text-primary" />
                Your Cart
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Your cart is empty</h3>
                    <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
                  </div>
                  <Button onClick={toggleCart} asChild>
                    <Link to="/menu">Browse Menu</Link>
                  </Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold">{item.name}</h4>
                        <span className="font-bold">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-muted transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-muted transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-muted/30 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Taxes and shipping calculated at checkout.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" onClick={toggleCart}>
                    Continue
                  </Button>
                  <Button asChild onClick={toggleCart}>
                    <Link to="/checkout">Checkout</Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
