import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-green-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Leaf className="h-6 w-6" />
          <span>Paradise Nursery</span>
        </Link>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-green-200 transition-colors">About Us</Link>
          <Link to="/products" className="hover:text-green-200 transition-colors">Products</Link>
          <Link to="/cart" className="relative hover:text-green-200 transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
