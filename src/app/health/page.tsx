'use client';

import { useFarm } from '@/context/FarmContext';
import { useState } from 'react';
import { HealthRecord } from '@/types';

export default function HealthPage() {
  const { animals, healthRecords, addHealthRecord } = useFarm();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    animalId: '', type: 'checkup' as const, description: '', veterinarian: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.animalId || !formData.description) return;

    const record: HealthRecord = {
      id: Date.now().toString(),
      animalId: formData.animalId,
      date: new Date().toISOString().split('T')[0],
      type: formData.type,
      description: formData.description,
      veterinarian: formData.veterinarian,
    };

    addHealthRecord(record);
    setFormData({ animalId: '', type: 'checkup', description: '', veterinarian: '' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800">Health Records 💊</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          + Add Record
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={formData.animalId}
              onChange={(e) => setFormData({ ...formData, animalId: e.target.value })}
              className="border rounded px-4 py-2"
              required
            >
              <option value="">Select Animal</option>
              {animals.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
              className="border rounded px-4 py-2"
            >
              <option value="checkup">Checkup</option>
              <option value="vaccine">Vaccine</option>
              <option value="medicine">Medicine</option>
              <option value="treatment">Treatment</option>
            </select>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border rounded px-4 py-2 col-span-1 md:col-span-2"
              required
            />
            <input
              type="text"
              placeholder="Veterinarian Name (optional)"
              value={formData.veterinarian}
              onChange={(e) => setFormData({ ...formData, veterinarian: e.target.value })}
              className="border rounded px-4 py-2 col-span-1 md:col-span-2"
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

      <div className="space-y-3">
        {healthRecords.length > 0 ? (
          healthRecords.map(record => {
            const animal = animals.find(a => a.id === record.animalId);
            const icon = record.type === 'vaccine' ? '💉' : record.type === 'medicine' ? '💊' : '🏥';
            return (
              <div key={record.id} className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{animal?.name} - {record.type}</p>
                    <p className="text-sm text-gray-600">{record.description}</p>
                    {record.veterinarian && (
                      <p className="text-xs text-gray-500 mt-1">Vet: {record.veterinarian}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{record.date}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No health records yet</p>
        )}
      </div>
    </div>
  );
}
