'use client';

import { useFarm } from '@/context/FarmContext';
import { useState } from 'react';
import { FeedingSchedule } from '@/types';

export default function SchedulePage() {
  const { animals, schedules, addSchedule, markScheduleComplete } = useFarm();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ animalId: '', feedType: '', amount: '', time: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.animalId || !formData.feedType) return;

    const schedule: FeedingSchedule = {
      id: Date.now().toString(),
      animalId: formData.animalId,
      feedType: formData.feedType,
      amount: parseInt(formData.amount) || 0,
      unit: 'kg',
      time: formData.time || '08:00',
      date: new Date().toISOString().split('T')[0],
      completed: false,
    };

    addSchedule(schedule);
    setFormData({ animalId: '', feedType: '', amount: '', time: '' });
    setShowForm(false);
  };

  const todaySchedules = schedules.filter(s => s.date === new Date().toISOString().split('T')[0]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800">Feeding Schedule 🍽️</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          + Add Schedule
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
                <option key={a.id} value={a.id}>{a.name} ({a.type})</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Feed Type"
              value={formData.feedType}
              onChange={(e) => setFormData({ ...formData, feedType: e.target.value })}
              className="border rounded px-4 py-2"
              required
            />
            <input
              type="number"
              placeholder="Amount (kg)"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="border rounded px-4 py-2"
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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

      <div className="space-y-2">
        <h2 className="text-xl font-bold text-gray-800">Today's Schedule</h2>
        {todaySchedules.length > 0 ? (
          todaySchedules.map(schedule => {
            const animal = animals.find(a => a.id === schedule.animalId);
            return (
              <div
                key={schedule.id}
                className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{animal?.name} - {schedule.feedType}</p>
                  <p className="text-sm text-gray-600">{schedule.amount} kg at {schedule.time}</p>
                </div>
                <button
                  onClick={() => markScheduleComplete(schedule.id)}
                  className={`px-4 py-2 rounded ${
                    schedule.completed
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {schedule.completed ? '✓ Done' : 'Mark Done'}
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No schedules for today</p>
        )}
      </div>
    </div>
  );
}
