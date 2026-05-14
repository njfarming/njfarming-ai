'use client';

import { useFarm } from '@/context/FarmContext';

export default function ProductsPage() {
  const { feeds, medicines } = useFarm();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Premium Products 🛒</h1>
          <p className="text-xl">Quality feeds and medicines for optimal animal health</p>
        </div>
      </section>

      {/* Animal Feed Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-green-800">🍽️ Premium Animal Feed</h2>
          <p className="text-gray-600 mb-8">Our carefully formulated feed products ensure optimal nutrition for your animals' growth and productivity.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeds.map(feed => (
              <div key={feed.id} className="bg-white rounded-lg shadow-lg p-6 border-b-4 border-yellow-400 hover:shadow-xl transition">
                <div className="text-3xl mb-3">🌾</div>
                <h3 className="font-bold text-gray-800 mb-2">{feed.name}</h3>
                <p className="text-sm text-gray-600 mb-3">For: <span className="font-semibold capitalize">{feed.type}s</span></p>
                <p className="text-gray-700 text-sm mb-3">{feed.description}</p>
                <div className="bg-blue-50 p-3 rounded mb-3">
                  <p className="text-xs text-gray-600"><strong>Nutrition:</strong> {feed.nutrition}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">₹{feed.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-green-800">💊 Animal Health Medicines</h2>
          <p className="text-gray-600 mb-8">Comprehensive healthcare solutions for prevention and treatment of common livestock diseases.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medicines.map(med => (
              <div key={med.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{med.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700"><strong>Purpose:</strong> {med.purpose}</p>
                  <p className="text-gray-700"><strong>Dosage:</strong> {med.dosage}</p>
                  {med.sideEffects && (
                    <p className="text-red-600"><strong>⚠️ Note:</strong> {med.sideEffects}</p>
                  )}
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-2xl font-bold text-green-700">₹{med.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <QualityBadge icon="✓" title="Certified Quality" desc="All products meet international standards" />
            <QualityBadge icon="🔬" title="Lab Tested" desc="Rigorous testing for safety and efficacy" />
            <QualityBadge icon="🌱" title="Natural Ingredients" desc="Made from premium natural sources" />
            <QualityBadge icon="📦" title="Fast Delivery" desc="Quick and reliable delivery service" />
          </div>
        </div>
      </section>
    </div>
  );
}

function QualityBadge({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
