import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <ShoppingBag className="w-24 h-24 text-gray-300 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Looks like you haven't added any plants to your cart yet. Browse our collection to find your perfect green companion.
        </p>
        <Link 
          to="/products" 
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
        <ShoppingBag className="w-8 h-8 mr-3 text-green-700" />
        Shopping Cart ({totalQuantity} items)
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({totalQuantity} items)</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-green-700">${totalCost.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-lg mb-4 transition-colors"
            onClick={() => alert('Checkout functionality coming soon!')}
          >
            Checkout
          </button>
          
          <Link 
            to="/products" 
            className="w-full bg-white hover:bg-gray-50 text-green-700 border border-green-200 font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
