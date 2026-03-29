import { useDispatch, useSelector } from 'react-redux';
import { addItem, Plant } from '../store/CartSlice';
import { RootState } from '../store/store';
import { plants } from '../data/plants';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (plant: Plant) => {
    dispatch(addItem(plant));
  };

  const isItemInCart = (id: string) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = Array.from(new Set(plants.map((p) => p.category)));

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-800">Our Plants</h1>
      
      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 border-b-2 border-green-200 pb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{plant.name}</h3>
                      <span className="text-lg font-semibold text-green-700">${plant.cost.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mb-6 h-12">{plant.description}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isItemInCart(plant.id)}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        isItemInCart(plant.id)
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      {isItemInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
