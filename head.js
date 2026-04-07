import React, { useState } from 'react';

const FarmerDashboard = () => {
  const [crops, setCrops] = useState([
    { id: 1, name: 'Organic Wheat', price: '₹2100/quintal', stock: '500kg' },
    { id: 2, name: 'Basmati Rice', price: '₹4500/quintal', stock: '200kg' }
  ]);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Krishi Seva Portal</h1>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="text-sm font-semibold">Weather: 28°C - Clear Sky</p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Crop Listing Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">My Current Listings</h2>
          {crops.map(crop => (
            <div key={crop.id} className="border-b py-3 flex justify-between">
              <span>{crop.name}</span>
              <span className="font-mono text-green-600">{crop.price}</span>
            </div>
          ))}

          
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            + Add New Crop
          </button>
        </section>

        {/* Market Insights */}
        <section className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
          <h2 className="text-xl font-bold mb-2">Market Price Alert</h2>
          <p className="text-gray-600">Tomato prices are up by 15% in Coimbatore Market today.</p>
        </section>
      </div>
    </div>
  );
};

export default FarmerDashboard;
