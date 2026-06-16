import { Animal, AnimalBreed, FeedProduct, Medicine, Educational, Testimonial } from '@/types';

export const sampleAnimals: Animal[] = [
  {
    id: '1', name: 'Yorkshire Pig', type: 'pig', breed: 'Yorkshire', age: 2, weight: 250,
    healthStatus: 'healthy', dateAdded: '2024-06-10'
  },
];

export const sampleBreeds: AnimalBreed[] = [
  { id: '1', type: 'pig', name: 'Yorkshire', description: 'Large white breed - best for meat production', productivity: 'Very High', idealWeight: '250-300 kg', lifespan: '15-20 years' },
  { id: '2', type: 'pig', name: 'Berkshire', description: 'Small black breed - premium meat quality', productivity: 'High', idealWeight: '200-250 kg', lifespan: '12-15 years' },
  { id: '3', type: 'pig', name: 'Hampstead', description: 'Medium breed - good for small farms', productivity: 'High', idealWeight: '220-270 kg', lifespan: '12-18 years' },
  { id: '4', type: 'pig', name: 'Duroc', description: 'Red breed - excellent meat flavor', productivity: 'Very High', idealWeight: '270-320 kg', lifespan: '15-18 years' },
];

export const sampleFeeds: FeedProduct[] = [
  { id: '1', name: 'Starter Pig Feed', type: 'pig', price: 800, description: 'High-protein feed for young piglets', nutrition: 'Protein 20%, Fat 8%' },
  { id: '2', name: 'Growing Pig Feed', type: 'pig', price: 600, description: 'Balanced feed for growing pigs', nutrition: 'Protein 16%, Fat 6%' },
  { id: '3', name: 'Finishing Pig Feed', type: 'pig', price: 500, description: 'Final stage feed for market-ready pigs', nutrition: 'Protein 12%, Fat 5%' },
  { id: '4', name: 'Breeding Feed', type: 'pig', price: 900, description: 'Special nutrition for breeding stock', nutrition: 'Protein 18%, Vitamins Enhanced' },
];

export const sampleMedicines: Medicine[] = [
  { id: '1', name: 'Antibiotic Powder', purpose: 'Treat bacterial infections in pigs', dosage: '1g per 10 liters of water', price: 250 },
  { id: '2', name: 'Dewormer Tablets', purpose: 'Remove internal parasites', dosage: '1 tablet per 50kg body weight', price: 350 },
  { id: '3', name: 'Vitamin Supplement', purpose: 'Boost immunity and growth', dosage: 'As per feed ratio', price: 200 },
  { id: '4', name: 'Respiratory Care Mix', purpose: 'Prevent respiratory diseases', dosage: 'In drinking water', price: 400 },
];

export const sampleEducational: Educational[] = [
  { id: '1', title: 'Pig Farming Essentials', type: 'book', topic: 'basics', description: 'Complete guide to starting pig farming', url: '#', duration: '250 pages' },
  { id: '2', title: 'Breeding Best Practices', type: 'book', topic: 'breeding', description: 'Master breeding and gestation management', url: '#', duration: '180 pages' },
  { id: '3', title: 'Disease Prevention Guide', type: 'book', topic: 'health', description: 'Comprehensive health management guide', url: '#', duration: '150 pages' },
  { id: '4', title: 'Getting Started with Pigs', type: 'video', topic: 'basics', description: 'Video tutorial for beginners', url: 'https://youtube.com', duration: '45 mins' },
  { id: '5', title: 'Farrowing Techniques', type: 'video', topic: 'breeding', description: 'Expert farrowing process walkthrough', url: 'https://youtube.com', duration: '60 mins' },
  { id: '6', title: 'Housing Design & Setup', type: 'video', topic: 'housing', description: 'How to build optimal pig housing', url: 'https://youtube.com', duration: '40 mins' },
];

export const trainingPrograms = [
  { id: '1', title: 'Basic Pig Farming Workshop', duration: '3 Days', price: 5000, desc: 'Perfect for beginners - learn fundamentals' },
  { id: '2', title: 'Advanced Breeding Masterclass', duration: '5 Days', price: 12000, desc: 'In-depth breeding and genetics training' },
  { id: '3', title: 'Disease Management Intensive', duration: '2 Days', price: 4000, desc: 'Expert health management techniques' },
  { id: '4', title: 'Housing & Infrastructure Design', duration: '2 Days', price: 3500, desc: 'Design and build optimal pig housing' },
];

export const books = [
  { id: '1', title: 'The Complete Pig Farming Guide', author: 'NJ Farming', price: 599, pages: 350, image: '📖' },
  { id: '2', title: 'Breeding for Profit', author: 'NJ Farming', price: 799, pages: 280, image: '📗' },
  { id: '3', title: 'Disease Prevention Handbook', author: 'NJ Farming', price: 499, pages: 200, image: '📘' },
  { id: '4', title: 'Pig Nutrition & Feeding', author: 'NJ Farming', price: 599, pages: 250, image: '📙' },
];

export const youtubeVideos = [
  { id: '1', title: 'How to Start Pig Farming', image: '', url: 'https://www.youtube.com/watch?v=GjIX6OB1GKg', views: '125K' },
  { id: '2', title: 'Farrowing Process Complete Guide', image: '/images/farrowing.png', url: 'https://www.youtube.com/watch?v=GjIX6OB1GKg', views: '89K' },
  { id: '3', title: 'Disease Prevention Tips', image: '', url: 'https://www.youtube.com/watch?v=GjIX6OB1GKg', views: '156K' },
  { id: '4', title: 'Housing Setup Tutorial', image: '', url: 'https://www.youtube.com/watch?v=GjIX6OB1GKg', views: '95K' },
];

export const sampleTestimonials: Testimonial[] = [
  { id: '1', name: 'Ramesh Kumar', location: 'Maharashtra', image: '👨‍🌾', review: 'NJ Farming training completely transformed my pig farming business!', rating: 5 },
  { id: '2', name: 'Priya Singh', location: 'Punjab', image: '👩‍🌾', review: 'The books and training materials are incredibly detailed and practical.', rating: 5 },
  { id: '3', name: 'Arjun Patel', location: 'Gujarat', image: '👨‍🌾', review: 'Best investment I made - tripled my production after their training!', rating: 5 },
];

export const blogPosts = [
  { id: '1', title: 'Best Practices for Pig Nutrition', category: 'Feeding', date: '2026-01-20' },
  { id: '2', title: 'Breeding Season Management', category: 'Breeding', date: '2026-01-15' },
  { id: '3', title: 'Housing Design Tips', category: 'Housing', date: '2026-01-10' },
  { id: '4', title: 'Disease Prevention Strategies', category: 'Health', date: '2026-01-05' },
];

