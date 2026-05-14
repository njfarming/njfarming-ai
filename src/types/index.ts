export type AnimalType = 'cow' | 'goat' | 'chicken' | 'sheep' | 'pig' | 'horse';
export type HealthStatus = 'healthy' | 'sick' | 'injured' | 'vaccinated';

export interface Animal {
  id: string;
  name: string;
  type: AnimalType;
  breed: string;
  age: number;
  weight: number;
  healthStatus: HealthStatus;
  lastVaccine?: string;
  dateAdded: string;
}

export interface FeedingSchedule {
  id: string;
  animalId: string;
  feedType: string;
  amount: number;
  unit: string;
  time: string;
  date: string;
  completed: boolean;
}

export interface HealthRecord {
  id: string;
  animalId: string;
  date: string;
  type: 'vaccine' | 'checkup' | 'medicine' | 'treatment';
  description: string;
  veterinarian?: string;
}

export interface AnimalBreed {
  id: string;
  type: AnimalType;
  name: string;
  description: string;
  productivity: string;
  idealWeight: string;
  lifespan: string;
}

export interface FeedProduct {
  id: string;
  name: string;
  type: AnimalType;
  price: number;
  description: string;
  nutrition: string;
}

export interface Medicine {
  id: string;
  name: string;
  purpose: string;
  dosage: string;
  price: number;
  sideEffects?: string;
}

export interface Educational {
  id: string;
  title: string;
  type: 'video' | 'book' | 'article';
  topic: string;
  description: string;
  url?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  review: string;
  rating: number;
}
