'use client';

import { Animal } from '@/types';

const animalEmojis: Record<string, string> = {
  cow: '🐄', goat: '🐐', chicken: '🐔', sheep: '🐑', pig: '🐷', horse: '🐴'
};

const healthColors: Record<string, string> = {
  healthy: 'bg-green-100 text-green-800',
  sick: 'bg-red-100 text-red-800',
  injured: 'bg-yellow-100 text-yellow-800',
  vaccinated: 'bg-blue-100 text-blue-800',
};

export default function AnimalCard({ animal, onDelete }: { animal: Animal; onDelete?: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
      <div className="flex justify-between items-start mb-2">
        <div className="text-4xl">{animalEmojis[animal.type]}</div>
        {onDelete && (
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            ✕
          </button>
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{animal.name}</h3>
      <p className="text-sm text-gray-600">{animal.breed}</p>
      <div className="mt-2 space-y-1 text-sm">
        <p><span className="font-semibold">Type:</span> {animal.type}</p>
        <p><span className="font-semibold">Age:</span> {animal.age} years</p>
        <p><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
        <div className="mt-2">
          <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${healthColors[animal.healthStatus]}`}>
            {animal.healthStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
