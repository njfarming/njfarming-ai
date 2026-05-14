'use client';

import { useFarm } from '@/context/FarmContext';

const animalEmojis: Record<string, string> = {
  cow: '🐄', goat: '🐐', chicken: '🐔', sheep: '🐑', pig: '🐷', horse: '🐴'
};

export default function BreedsPage() {
  const { breeds } = useFarm();

  const groupedBreeds = breeds.reduce((acc, breed) => {
    if (!acc[breed.type]) acc[breed.type] = [];
    acc[breed.type].push(breed);
    return acc;
  }, {} as Record<string, typeof breeds>);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Premium Animal Breeds 📚</h1>
          <p className="text-xl">Discover the finest animal breeds for your farming operation</p>
        </div>
      </section>

      {/* Breed Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        {Object.entries(groupedBreeds).map(([type, typeBreeds]) => (
          <div key={type} className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">{animalEmojis[type]}</span>
              <h2 className="text-3xl font-bold text-green-800 capitalize">{type === 'chicken' ? 'Poultry' : type + 's'}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {typeBreeds.map(breed => (
                <div key={breed.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{breed.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{breed.description}</p>

                  <div className="space-y-3 bg-gray-50 p-4 rounded">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">📈 Productivity:</span>
                      <span className="text-green-700 font-bold">{breed.productivity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">⚖️ Ideal Weight:</span>
                      <span className="text-green-700">{breed.idealWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">⏳ Lifespan:</span>
                      <span className="text-green-700">{breed.lifespan}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Info Section */}
      <section className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Choosing the Right Breed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoBox
              icon="💡"
              title="Productivity"
              desc="Choose breeds based on your production goals - dairy, meat, wool, or eggs"
            />
            <InfoBox
              icon="🌍"
              title="Climate Adaptation"
              desc="Select breeds that thrive in your local climate and weather conditions"
            />
            <InfoBox
              icon="💰"
              title="Cost Efficiency"
              desc="Consider feed conversion rates and maintenance costs for better ROI"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoBox({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-lg p-6 text-center border-t-4 border-green-600 shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
