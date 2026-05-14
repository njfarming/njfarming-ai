'use client';

import { useFarm } from '@/context/FarmContext';
import AnimalCard from '@/components/AnimalCard';
import { useState } from 'react';
import { Animal, AnimalType } from '@/types';

export default function AnimalsPage() {
  const { animals, addAnimal, removeAnimal } = useFarm();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', type: 'cow' as AnimalType, breed: '', age: '', weight: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.breed) return;

    const newAnimal: Animal = {
      id: Date.now().toString(),
      name: formData.name,
      type: formData.type,
      breed: formData.breed,
      age: parseInt(formData.age) || 0,
      weight: parseInt(formData.weight) || 0,
      healthStatus: 'healthy',
      dateAdded: new Date().toISOString().split('T')[0],
    };

    addAnimal(newAnimal);
    setFormData({ name: '', type: 'cow', breed: '', age: '', weight: '' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800">My Animals 🐄</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          + Add Animal
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Animal Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border rounded px-4 py-2"
              required
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as AnimalType })}
              className="border rounded px-4 py-2"
            >
              <option value="cow">Cow</option>
              <option value="goat">Goat</option>
              <option value="chicken">Chicken</option>
              <option value="sheep">Sheep</option>
              <option value="pig">Pig</option>
              <option value="horse">Horse</option>
            </select>
            <input
              type="text"
              placeholder="Breed"
              value={formData.breed}
              onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              className="border rounded px-4 py-2"
              required
            />
            <input
              type="number"
              placeholder="Age (years)"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="border rounded px-4 py-2"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              className="border rounded px-4 py-2"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onDelete={() => removeAnimal(animal.id)}
          />
        ))}
      </div>

      {animals.length === 0 && (
        <p className="text-center text-gray-600 py-8">No animals yet. Add one to get started!</p>
      )}
    </div>
  );
}
