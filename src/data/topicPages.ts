export interface TopicHighlight {
  title: string;
  description: string;
}

export interface TopicFAQ {
  question: string;
  answer: string;
}

export interface TopicResource {
  label: string;
  description: string;
  href: string;
  type: 'article' | 'video' | 'guide';
}

export interface TopicPageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl: string;
  highlights: TopicHighlight[];
  faqs: TopicFAQ[];
  resources: TopicResource[];
}

export const topicPages: Record<string, TopicPageData> = {
  'pig-breeds': {
    slug: 'pig-breeds',
    title: 'Pig Breeds',
    subtitle: 'Choose the right breed for your farm goals',
    description: 'Compare top pig breeds for meat quality, hardiness, and farm scale. Learn how breed choice impacts productivity, feed efficiency, and market returns.',
    image: 'https://images.unsplash.com/photo-1512140597774-9d908b1f0f8b?auto=format&fit=crop&w=1200&q=80',
    // videoUrl: 'https://www.youtube.com/embed/8z4YpMpxmY0',
    videoUrl: 'https://www.youtube.com/watch?v=GjIX6OB1GKg',
    highlights: [
      { title: 'Large White & Landrace', description: 'Highly productive breeds ideal for fast growth and lean meat.' },
      { title: 'Duroc & Hampshire', description: 'Robust breeds with strong flavor and easy handling.' },
      { title: 'Local Hardy Breeds', description: 'Choose breeds adapted to your climate for lower risk and higher resilience.' },
    ],
    faqs: [
      { question: 'How do I select a breed for my farm?', answer: 'Evaluate your climate, market demand, and available housing before selecting a breed that fits your production goals.' },
      { question: 'Can I crossbreed for better performance?', answer: 'Crossbreeding can improve hybrid vigor, but maintain strong records and use it strategically for consistent outcomes.' },
    ],
    resources: [
      { type: 'article', label: 'Breed Selection Checklist', description: 'Essential factors to consider before buying your first stock.', href: '/starting-out/pig-breeds', },
      { type: 'video', label: 'Breed Comparison Video', description: 'Understand breed differences with a clear visual guide.', href: 'https://www.youtube.com/watch?v=8z4YpMpxmY0', },
    ],
  },
  'breeding-gestation': {
    slug: 'breeding-gestation',
    title: 'Breeding & Gestation',
    subtitle: 'Plan successful matings and care for pregnant sows',
    description: 'Master sow fertility, mating timing, and pregnancy care so your herd reproduces efficiently and reliably.',
    image: 'https://images.unsplash.com/photo-1515313349132-1b9451f1c442?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/2i2WJw3zN6k',
    highlights: [
      { title: 'Estrus Monitoring', description: 'Detect heat signs and schedule breeding windows accurately.' },
      { title: 'Boar Selection', description: 'Choose males with strong genetics and health profiles.' },
      { title: 'Pregnancy Nutrition', description: 'Feed pregnant sows balanced diets to support fetal development.' },
    ],
    faqs: [
      { question: 'How long is pig gestation?', answer: 'Pig gestation lasts about 114 days, roughly 3 months, 3 weeks, and 3 days.' },
      { question: 'What should I feed a pregnant sow?', answer: 'Use high-energy, high-fiber rations with adequate vitamins to support both the sow and developing piglets.' },
    ],
    resources: [
      { type: 'guide', label: 'Gestation Management Guide', description: 'Step-by-step schedule from breeding to farrowing.', href: '/starting-out/breeding-gestation', },
      { type: 'video', label: 'Pregnancy Care Tutorial', description: 'Watch a complete sow gestation care workflow.', href: 'https://www.youtube.com/watch?v=2i2WJw3zN6k', },
    ],
  },
  'farrowing': {
    slug: 'farrowing',
    title: 'Farrowing',
    subtitle: 'Support safe births and healthy piglets',
    description: 'Prepare for farrowing with the correct pen setup, labor monitoring, and piglet care essential for a successful litter.',
    image: 'https://images.unsplash.com/photo-1576934877438-459834de1cdd?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/zL5tjb4_QpQ',
    highlights: [
      { title: 'Farrowing Pen Setup', description: 'Create a warm, clean, and quiet birthing area for sows.' },
      { title: 'Labor Support', description: 'Recognize normal labor and intervene safely when needed.' },
      { title: 'Newborn Care', description: 'Ensure piglets receive colostrum and stay warm immediately after birth.' },
    ],
    faqs: [
      { question: 'What are common farrowing problems?', answer: 'Watch for difficult births, retained placenta, and piglets that need extra heat or colostrum.' },
      { question: 'How many piglets do sows usually have?', answer: 'A typical litter size ranges from 8 to 14 piglets depending on breed and farm management.' },
    ],
    resources: [
      { type: 'article', label: 'Farrowing Checklist', description: 'Everything to prepare before your sow starts labor.', href: '/starting-out/farrowing', },
      { type: 'video', label: 'Farrowing Walkthrough', description: 'Video guide through the first 24 hours after birth.', href: 'https://www.youtube.com/watch?v=zL5tjb4_QpQ', },
    ],
  },
  'finishing-pigs': {
    slug: 'finishing-pigs',
    title: 'Finishing Pigs',
    subtitle: 'Complete the final growth stage with confidence',
    description: 'Optimize feed, shelter, and health during finishing so your pigs reach market weight quickly and in good condition.',
    image: 'https://images.unsplash.com/photo-1512187849-80f3d3bc1d5d?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/A4wQN8OD1X0',
    highlights: [
      { title: 'Feed Efficiency', description: 'Switch to finishing rations designed for weight gain and muscle development.' },
      { title: 'Clean Housing', description: 'Keep pens tidy and low-stress to support weight gain.' },
      { title: 'Performance Tracking', description: 'Weigh animals regularly and adjust feed plans as needed.' },
    ],
    faqs: [
      { question: 'When is a pig ready for market?', answer: 'Pigs are usually market-ready between 5 to 7 months old, depending on breed and feed strategy.' },
      { question: 'How much should finishing pigs eat daily?', answer: 'Feed amounts depend on body weight and diet, but typically 3–4 kg per day for growing pigs.' },
    ],
    resources: [
      { type: 'article', label: 'Finishing Program', description: 'How to manage the final growth stage with optimal returns.', href: '/starting-out/finishing-pigs', },
      { type: 'video', label: 'Finishing Farm Tour', description: 'See practical finishing pen setup and routine management.', href: 'https://www.youtube.com/watch?v=A4wQN8OD1X0', },
    ],
  },
  'equipment-supplies': {
    slug: 'equipment-supplies',
    title: 'Equipment & Supplies',
    subtitle: 'Outfit your farm with reliable tools and materials',
    description: 'Find the right feeders, drinkers, fencing, and housing gear to build a safe, efficient pig farm.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/K3vM8Zll4XY',
    highlights: [
      { title: 'Feeders & Drinker Systems', description: 'Choose products that reduce waste and keep water clean.' },
      { title: 'Fencing Essentials', description: 'Select fencing for durability, pig containment, and easy repair.' },
      { title: 'Tools & Supplies', description: 'Stock up on cleaning gear, medical kits, and safe bedding materials.' },
    ],
    faqs: [
      { question: 'What is the best bedding for pigs?', answer: 'Use dry straw or wood shavings for insulation and comfort; avoid damp bedding to prevent disease.' },
      { question: 'How should I store feed and supplies?', answer: 'Keep feed dry and rodents out; store supplies in a clean, organized space near the pens.' },
    ],
    resources: [
      { type: 'guide', label: 'Farm Equipment Planner', description: 'Choose equipment that matches your herd size and budget.', href: '/starting-out/equipment-supplies', },
      { type: 'video', label: 'Equipment Setup', description: 'Watch a step-by-step farm equipment install guide.', href: 'https://www.youtube.com/watch?v=K3vM8Zll4XY', },
    ],
  },
  feeding: {
    slug: 'feeding',
    title: 'Feeding Your Pigs',
    subtitle: 'Build a nutrition plan for every growth stage',
    description: 'Smart feeding practices improve growth, health, and profitability. This page covers rations, schedules, and feed management.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/hN2kKcxCFO0',
    highlights: [
      { title: 'Starter to Finisher Feed', description: 'Transition diets based on age and weight for steady growth.' },
      { title: 'Feed Hygiene', description: 'Keep feed dry and protected from pests to avoid spoilage.' },
      { title: 'Water + Feed Balance', description: 'Healthy pigs need clean water alongside every feed plan.' },
    ],
    faqs: [
      { question: 'How do I know if pigs are eating enough?', answer: 'Watch body condition, activity, and feed disappearance; adjust slowly rather than rapidly.' },
      { question: 'Should I mix feed myself or buy ready-made?', answer: 'Ready-made balanced rations are convenient, but custom mixes can suit local ingredients if you manage them carefully.' },
    ],
    resources: [
      { type: 'article', label: 'Feeding Best Practices', description: 'Detailed guidance on pig feed quality and portion control.', href: '/pig-basics/feeding', },
      { type: 'video', label: 'Feeding Routine Demo', description: 'Watch a complete daily feeding routine.', href: 'https://www.youtube.com/watch?v=hN2kKcxCFO0', },
    ],
  },
  fencing: {
    slug: 'fencing',
    title: 'Fencing',
    subtitle: 'Protect your herd with dependable boundaries',
    description: 'Effective fencing keeps pigs safe, reduces escapes, and simplifies pasture rotation. Learn which fence types suit your farm.',
    image: 'https://images.unsplash.com/photo-1510414696678-2415ad8474aa?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/RQG2k2VxC30',
    highlights: [
      { title: 'Electric Fence Options', description: 'Use low-cost electric systems for flexible paddock control.' },
      { title: 'Permanent Wire Fencing', description: 'Choose strong wire for long-term perimeter protection.' },
      { title: 'Portable Solutions', description: 'Portable panels help with rotational grazing and temporary pens.' },
    ],
    faqs: [
      { question: 'How tall should pig fencing be?', answer: 'Fencing should be at least 3–4 feet high, with secure bottoms to prevent digging out.' },
      { question: 'Can pigs break through reinforced fencing?', answer: 'Good fencing and regular maintenance prevent escapes; repair weak spots immediately.' },
    ],
    resources: [
      { type: 'article', label: 'Fence Planning Guide', description: 'Match fence style to your herd and grazing system.', href: '/pig-basics/fencing', },
      { type: 'video', label: 'Fence Installation', description: 'Watch how to install sturdy pig fencing.', href: 'https://www.youtube.com/watch?v=RQG2k2VxC30', },
    ],
  },
  housing: {
    slug: 'housing',
    title: 'Housing & Shelter',
    subtitle: 'Create comfortable, clean homes for your pigs',
    description: 'Good housing improves pig health and reduces labor. This page covers shelter design, ventilation, and bedding strategies.',
    image: 'https://images.unsplash.com/photo-1560185127-6f92f506fae9?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/yN4d7n4A5EY',
    highlights: [
      { title: 'Ventilation', description: 'Provide airflow without drafts to keep pigs cool and dry.' },
      { title: 'Bedding Choices', description: 'Use materials that stay clean and comfortable for the herd.' },
      { title: 'Pen Layout', description: 'Organize pens for feeding, resting, and easy cleaning.', },
    ],
    faqs: [
      { question: 'What size shelter does each pig need?', answer: 'Allow at least 4–6 square feet per piglet and 10–12 square feet per finishing pig.' },
      { question: 'How often should I clean pig housing?', answer: 'Clean daily as needed and do a full bedding refresh weekly to control odors and disease.' },
    ],
    resources: [
      { type: 'article', label: 'Shelter Design Tips', description: 'Plan housing with welfare and efficiency in mind.', href: '/pig-basics/housing', },
      { type: 'video', label: 'Pig Housing Setup', description: 'Watch how to arrange pens and bedding properly.', href: 'https://www.youtube.com/watch?v=yN4d7n4A5EY', },
    ],
  },
  pasture: {
    slug: 'pasture',
    title: 'Raising Pigs on Pasture',
    subtitle: 'Make your land work harder with paddock grazing',
    description: 'Pasture systems can lower feed costs and improve pig welfare. Learn how to rotate grazing, protect pastures, and manage grazing pigs safely.',
    image: 'https://images.unsplash.com/photo-1494910062011-d3f129d6f3d8?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/YQhH1R0uOqk',
    highlights: [
      { title: 'Rotational Grazing', description: 'Move pigs regularly to protect grass and reduce parasites.' },
      { title: 'Shade & Water', description: 'Provide shade and water stations in every paddock.', },
      { title: 'Soil Health', description: 'Use pig grazing to boost pasture fertility while avoiding overuse.' },
    ],
    faqs: [
      { question: 'Can pigs graze all day on pasture?', answer: 'Pigs can graze, but need supplemental feed to meet energy and protein needs for growth.' },
      { question: 'How do I prevent pasture damage?', answer: 'Use temporary fencing and allow recovery periods between grazing shifts.' },
    ],
    resources: [
      { type: 'article', label: 'Pasture Management', description: 'Best practices for grazing pigs and protecting pasture.', href: '/pig-basics/pasture', },
      { type: 'video', label: 'Grazing System Demo', description: 'See rotational grazing in action.', href: 'https://www.youtube.com/watch?v=YQhH1R0uOqk', },
    ],
  },
  water: {
    slug: 'water',
    title: 'Water',
    subtitle: 'Keep your herd hydrated with clean water systems',
    description: 'Water is the most important nutrient. This page explains how to provide clean, constant water for your pigs and manage drinker systems effectively.',
    image: 'https://images.unsplash.com/photo-1505673542673-9800cfa9f06b?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/BlrB5CZe1A0',
    highlights: [
      { title: 'Clean Water', description: 'Change water daily and use systems that stay free from dirt and algae.' },
      { title: 'Automatic Drinkers', description: 'Invest in drinkers that deliver fresh water on demand.' },
      { title: 'Hydration Signs', description: 'Watch for dry nose, sunken eyes, or slow eating as dehydration warning signs.' },
    ],
    faqs: [
      { question: 'How much water does a pig drink?', answer: 'A growing pig may drink 5–10 liters daily depending on temperature, feed type, and size.' },
      { question: 'What water temperature is best?', answer: 'Provide cool, clean water around 15–20°C to encourage intake.' },
    ],
    resources: [
      { type: 'article', label: 'Water Management Tips', description: 'Improve herd health with better water systems.', href: '/pig-basics/water', },
      { type: 'video', label: 'Drinker System Guide', description: 'Watch how to set up pig water systems.', href: 'https://www.youtube.com/watch?v=BlrB5CZe1A0', },
    ],
  },
  'disease-prevention': {
    slug: 'disease-prevention',
    title: 'Disease Prevention',
    subtitle: 'Protect your herd with strong health practices',
    description: 'Reduce disease risk through biosecurity, vaccination, and early detection. These practices are the foundation of a profitable pig farm.',
    image: 'https://images.unsplash.com/photo-1504091888097-7c3492b5d73f?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/7QkF3dLQO-k',
    highlights: [
      { title: 'Biosecurity', description: 'Control access, sanitize tools, and isolate new animals to stop disease spread.' },
      { title: 'Vaccination Plans', description: 'Create vaccination schedules for common pig diseases.' },
      { title: 'Early Detection', description: 'Train staff to spot illness quickly and act before it spreads.' },
    ],
    faqs: [
      { question: 'What is the best way to prevent respiratory illnesses?', answer: 'Good ventilation, clean housing, and proper nutrition are key to respiratory health.' },
      { question: 'How often should I review biosecurity?', answer: 'Review procedures every season and after any new farm visitor or animal introduction.' },
    ],
    resources: [
      { type: 'guide', label: 'Biosecurity Checklist', description: 'Maintain a safe, disease-resistant farm environment.', href: '/pig-health/disease-prevention', },
      { type: 'video', label: 'Disease Prevention Strategies', description: 'Watch the practical steps you can take right away.', href: 'https://www.youtube.com/watch?v=7QkF3dLQO-k', },
    ],
  },
  'health-wellbeing': {
    slug: 'health-wellbeing',
    title: 'Pig Health & Well-being',
    subtitle: 'Support strong pigs with the right daily care',
    description: 'Healthy pigs are productive pigs. Focus on routine checks, nutrition, and comfortable housing to keep your herd thriving.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/4KKpYsvLBuI',
    highlights: [
      { title: 'Routine Monitoring', description: 'Check pigs daily for appetite, movement, and breathing changes.' },
      { title: 'Comfort & Welfare', description: 'Provide bedding, shade, and enough space for natural behavior.' },
      { title: 'Nutrition Support', description: 'Use minerals and vitamins alongside quality feed to maintain condition.' },
    ],
    faqs: [
      { question: 'How do I tell if a pig is sick?', answer: 'Look for reduced appetite, coughing, lethargy, or abnormal stool patterns.' },
      { question: 'Why is social well-being important?', answer: 'Pigs are social animals; stress from isolation or overcrowding reduces growth and immunity.' },
    ],
    resources: [
      { type: 'article', label: 'Well-being Practices', description: 'Everyday care actions that boost herd health.', href: '/pig-health/health-wellbeing', },
      { type: 'video', label: 'Healthy Herd Routine', description: 'A practical day in a healthy pig farm.', href: 'https://www.youtube.com/watch?v=4KKpYsvLBuI', },
    ],
  },
  medicines: {
    slug: 'medicines',
    title: 'Health Medicines',
    subtitle: 'Use medications responsibly for pig health',
    description: 'Understand common medicines, dosing, and when to call a veterinarian. Responsible medicine use keeps your herd healthy and compliant.',
    image: 'https://images.unsplash.com/photo-1580281657521-3f2b2d9edf88?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/RtXgGK6a8ro',
    highlights: [
      { title: 'Common Treatments', description: 'Know when to use antibiotics, dewormers, and supplements.' },
      { title: 'Veterinary Support', description: 'Work with a vet for diagnosis and medicine decisions.' },
      { title: 'Safe Storage', description: 'Store medicines cleanly and keep records of every treatment.' },
    ],
    faqs: [
      { question: 'When should I call a veterinarian?', answer: 'If symptoms last more than 24 hours or multiple pigs show serious illness, get professional help.' },
      { question: 'Can I use human medicines for pigs?', answer: 'Never use human medicines without veterinary approval; many are unsafe for livestock.' },
    ],
    resources: [
      { type: 'guide', label: 'Medication Management', description: 'Keep your medicine use effective and safe.', href: '/pig-health/medicines', },
      { type: 'video', label: 'Treating Common Conditions', description: 'Learn which treatments fit common pig health issues.', href: 'https://www.youtube.com/watch?v=RtXgGK6a8ro', },
    ],
  },
  offline: {
    slug: 'offline',
    title: 'Offline Training',
    subtitle: 'Practical farm training for hands-on learning',
    description: 'Attend in-person training designed for beginner and experienced pig farmers. Learn farm setup, nutrition, health, and marketing from expert instructors.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/nK5rSmDGNl8',
    highlights: [
      { title: 'Hands-On Learning', description: 'Practice feeding, housing, and health care under trainer supervision.' },
      { title: 'Small Group Format', description: 'Learn in groups that allow personalized support.' },
      { title: 'Practical Tools', description: 'Take home checklists and plans for your farm.' },
    ],
    faqs: [
      { question: 'Who is offline training for?', answer: 'Suitable for small-scale farmers, new entrants, and anyone who prefers practical learning.' },
      { question: 'What will I take away?', answer: 'A clear farming action plan, improved skills, and colleague support from the training community.' },
    ],
    resources: [
      { type: 'article', label: 'Training Schedule', description: 'Check the latest offline course dates and topics.', href: '/training/offline', },
      { type: 'video', label: 'Training Preview', description: 'See what our offline course experience looks like.', href: 'https://www.youtube.com/watch?v=nK5rSmDGNl8', },
    ],
  },
  books: {
    slug: 'books',
    title: 'Books',
    subtitle: 'Knowledge-rich guides for every pig farmer',
    description: 'Browse practical books on breeding, nutrition, health, and farm management. Each book is designed to help you build a stronger operation.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/mT5mN7N7P7g',
    highlights: [
      { title: 'Step-by-Step Guides', description: 'Books that walk you through set-up and operations, from start to finish.' },
      { title: 'Expert Authors', description: 'Content written by experienced farmers and veterinarians.' },
      { title: 'Practical Templates', description: 'Includes planning, feeding, and health tracking templates.', },
    ],
    faqs: [
      { question: 'Can I use these books for training staff?', answer: 'Yes, they are written in simple language and are ideal for sharing with your team.' },
      { question: 'Are these guides updated regularly?', answer: 'They are created with current best practices and local farm realities in mind.', },
    ],
    resources: [
      { type: 'guide', label: 'Recommended Reading', description: 'A curated list of books for every skill level.', href: '/training/books', },
      { type: 'video', label: 'Book Highlights', description: 'Overview of our most popular training books.', href: 'https://www.youtube.com/watch?v=mT5mN7N7P7g', },
    ],
  },
  blogs: {
    slug: 'blogs',
    title: 'Blogs',
    subtitle: 'Read tips and stories from pig farming experts',
    description: 'Stay updated with practical articles on nutrition, breeding, housing, and farm management. Our blog posts make learning fast and actionable.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/sT7WQKjvgtc',
    highlights: [
      { title: 'Actionable Advice', description: 'Quick reads with clear steps you can apply right away.' },
      { title: 'Farmer Stories', description: 'Learn from real pig farm experiences and lessons.', },
      { title: 'Seasonal Insights', description: 'Get content tailored to the farming calendar.', },
    ],
    faqs: [
      { question: 'How often are blog posts published?', answer: 'New content is added regularly to keep you updated with practical farming ideas.' },
      { question: 'Can I request topics?', answer: 'Yes, reach out through the contact page with topics you want covered.', },
    ],
    resources: [
      { type: 'article', label: 'Popular Blog Topics', description: 'Browse our top articles on pig farming.', href: '/publication/blogs', },
      { type: 'video', label: 'Blog Preview', description: 'See what kinds of articles and tips we publish.', href: 'https://www.youtube.com/watch?v=sT7WQKjvgtc', },
    ],
  },
  videos: {
    slug: 'videos',
    title: 'Videos',
    subtitle: 'Watch farm tutorials, guide videos, and expert sessions',
    description: 'Access video lessons on housing, health, nutrition, and production. Visual learning makes farm skills easier to apply.',
    image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/iwj6gk0cX8s',
    highlights: [
      { title: 'Tutorial Videos', description: 'Step-by-step demonstrations for farm processes.' },
      { title: 'Expert Interviews', description: 'Learn from farmers and veterinarians in the field.' },
      { title: 'Practical Walkthroughs', description: 'See real farms and real equipment in use.', },
    ],
    faqs: [
      { question: 'Can I use these videos for training?', answer: 'Yes, they are ideal for group learning and staff refreshers.' },
      { question: 'Are videos free to watch?', answer: 'All videos linked here are available without a purchase.', },
    ],
    resources: [
      { type: 'video', label: 'Video Library', description: 'Browse the full library of farm videos.', href: '/publication/videos', },
      { type: 'article', label: 'Video Learning Guide', description: 'Tips for using videos to train your team.', href: '/publication/blogs', },
    ],
  },
};
