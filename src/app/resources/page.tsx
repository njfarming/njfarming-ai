'use client';

import { useFarm } from '@/context/FarmContext';

export default function ResourcesPage() {
  const { educational, feeds, medicines, testimonials } = useFarm();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800">Resources & Products 📖</h1>

      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Educational Content 📚</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educational.map(item => {
            const icon = item.type === 'video' ? '🎥' : item.type === 'book' ? '📖' : '📄';
            return (
              <div key={item.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex gap-3">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    {item.duration && <p className="text-xs text-gray-500 mt-1">⏱️ {item.duration}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Animal Feed 🍽️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feeds.map(feed => (
            <div key={feed.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-gray-800">{feed.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Type: {feed.type}</p>
              <p className="text-gray-700 text-sm mb-2">{feed.description}</p>
              <p className="text-xs text-gray-500">Nutrition: {feed.nutrition}</p>
              <p className="font-bold text-green-600 mt-2">₹{feed.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Medicines 💊</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {medicines.map(med => (
            <div key={med.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-gray-800">{med.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Purpose: {med.purpose}</p>
              <p className="text-sm text-gray-700 mb-2">Dosage: {med.dosage}</p>
              {med.sideEffects && <p className="text-xs text-red-600">⚠️ {med.sideEffects}</p>}
              <p className="font-bold text-green-600 mt-2">₹{med.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Testimonials ⭐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">"{testimonial.review}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
