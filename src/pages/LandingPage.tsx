import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1466692476877-396416bf836b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white p-8 max-w-3xl bg-black/50 rounded-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-6">Welcome to Paradise Nursery</h1>
        <p className="text-xl mb-8 leading-relaxed">
          Where Green Meets Serenity. We offer a wide variety of house plants to bring life, fresh air, and beauty into your home. Whether you are looking for aromatic herbs or medicinal wonders, we have the perfect plant for you.
        </p>
        <Link 
          to="/products" 
          className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
