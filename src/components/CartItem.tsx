import { useDispatch } from 'react-redux';
import { CartItem as CartItemType, increaseQuantity, decreaseQuantity, removeItem } from '../store/CartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
        referrerPolicy="no-referrer"
      />
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{item.category}</p>
        <p className="text-green-700 font-semibold">${item.cost.toFixed(2)} unit price</p>
      </div>
      
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button 
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-10 text-center font-medium">{item.quantity}</span>
          <button 
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-24 text-right font-bold text-gray-900">
          ${(item.cost * item.quantity).toFixed(2)}
        </div>
        
        <button 
          onClick={() => dispatch(removeItem(item.id))}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
