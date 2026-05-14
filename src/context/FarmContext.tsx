'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Animal, FeedingSchedule, HealthRecord, AnimalBreed, FeedProduct, Medicine, Educational, Testimonial
} from '@/types';
import { sampleAnimals, sampleBreeds, sampleFeeds, sampleMedicines, sampleEducational, sampleTestimonials } from '@/data/sampleData';

interface FarmContextType {
  animals: Animal[];
  schedules: FeedingSchedule[];
  healthRecords: HealthRecord[];
  breeds: AnimalBreed[];
  feeds: FeedProduct[];
  medicines: Medicine[];
  educational: Educational[];
  testimonials: Testimonial[];
  addAnimal: (animal: Animal) => void;
  removeAnimal: (id: string) => void;
  addSchedule: (schedule: FeedingSchedule) => void;
  markScheduleComplete: (id: string) => void;
  addHealthRecord: (record: HealthRecord) => void;
}

const FarmContext = createContext<FarmContextType | undefined>(undefined);

export function FarmProvider({ children }: { children: React.ReactNode }) {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [schedules, setSchedules] = useState<FeedingSchedule[]>([]);
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('farmData');
    if (saved) {
      const data = JSON.parse(saved);
      setAnimals(data.animals || sampleAnimals);
      setSchedules(data.schedules || []);
      setHealthRecords(data.healthRecords || []);
    } else {
      setAnimals(sampleAnimals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('farmData', JSON.stringify({ animals, schedules, healthRecords }));
  }, [animals, schedules, healthRecords]);

  return (
    <FarmContext.Provider value={{
      animals, schedules, healthRecords, breeds: sampleBreeds, feeds: sampleFeeds,
      medicines: sampleMedicines, educational: sampleEducational, testimonials: sampleTestimonials,
      addAnimal: (animal) => setAnimals([...animals, animal]),
      removeAnimal: (id) => setAnimals(animals.filter(a => a.id !== id)),
      addSchedule: (schedule) => setSchedules([...schedules, schedule]),
      markScheduleComplete: (id) => setSchedules(schedules.map(s => s.id === id ? { ...s, completed: true } : s)),
      addHealthRecord: (record) => setHealthRecords([...healthRecords, record]),
    }}>
      {children}
    </FarmContext.Provider>
  )
};

export function useFarm() {
  const context = useContext(FarmContext);
  if (!context) throw new Error('useFarm must be used within FarmProvider');
  return context;
}


// export function useFarm() {
//   const context = useContext(FarmContext);
//   if (!context) throw new Error('useFarm must be used within FarmProvider');
//   return context;
// }
