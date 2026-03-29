export default function AboutUs() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">About Paradise Nursery</h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to Paradise Nursery, your premier destination for high-quality house plants. 
          Founded with a passion for bringing nature indoors, we believe that everyone deserves 
          to experience the joy and benefits of living with plants.
        </p>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our carefully curated selection includes everything from aromatic herbs that elevate your cooking, 
          to medicinal plants that promote wellness, and air-purifying varieties that create a healthier home environment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 text-2xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">Every plant is hand-selected and nurtured to ensure it arrives healthy and ready to thrive.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 text-2xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
            <p className="text-gray-600">We provide detailed care instructions and ongoing support for your plant journey.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 text-2xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">Our packaging is sustainable and we employ environmentally conscious growing practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
