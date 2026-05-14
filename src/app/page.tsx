'use client';

import Link from 'next/link';
import { useFarm } from '@/context/FarmContext';
import { trainingPrograms, books, youtubeVideos } from '@/data/sampleData';

export default function Home() {
  const { testimonials } = useFarm();

  return (
    <div className="space-y-0">
      {/* Hero Section with Video Background */}
      <section className="relative h-96 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><rect fill=%22%23000%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22%23fff%22 opacity=%220.1%22/></svg>')] bg-repeat"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center relative z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Small Scale Pig Farming</h1>
            <p className="text-xl md:text-2xl mb-8">Learn, Train & Grow Your Pig Farming Business</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/training/offline" className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
                🎓 Offline Training
              </Link>
              <Link href="/training/books" className="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                📚 Buy Books
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-800 transition">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <OfferCard icon="🎓" title="Training Programs" desc="Comprehensive offline training courses" />
            <OfferCard icon="📚" title="Expert Books" desc="In-depth guides and handbooks" />
            <OfferCard icon="🧠" title="Expert Knowledge" desc="Years of experience & expertise" />
            <OfferCard icon="💊" title="Health Solutions" desc="Medicines & wellness products" />
          </div>
        </div>
      </section>

      {/* What's New Section with YouTube Videos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">What New at Small Scale Pig Farming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeVideos.map(video => (
              <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-40 flex items-center justify-center">
                  <span className="text-4xl">🎥</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm">👁️ {video.views} views</p>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 text-sm mt-2 inline-block">
                    Watch Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Explore Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategoryCard
              icon="🐷"
              title="Pig Breeds"
              desc="Learn about different pig breeds"
              href="/starting-out/pig-breeds"
            />
            <CategoryCard
              icon="🍽️"
              title="Feeding Your Pigs"
              desc="Complete feeding guide"
              href="/pig-basics/feeding"
            />
            <CategoryCard
              icon="🏠"
              title="Housing & Shelter"
              desc="Build the perfect pig shelter"
              href="/pig-basics/housing"
            />
            <CategoryCard
              icon="💊"
              title="Pig Health"
              desc="Disease prevention & wellness"
              href="/pig-health/health-wellbeing"
            />
          </div>
        </div>
      </section>

      {/* All Sub-Categories Small Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Complete Learning Path</h2>

          <div className="space-y-8">
            {/* Starting Out */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">🌱 Starting Out</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <SmallCard href="/starting-out/pig-breeds" title="Pig Breeds" icon="🐷" />
                <SmallCard href="/starting-out/breeding-gestation" title="Breeding & Gestation" icon="❤️" />
                <SmallCard href="/starting-out/farrowing" title="Farrowing" icon="🐣" />
                <SmallCard href="/starting-out/finishing-pigs" title="Finishing Pigs" icon="📈" />
                <SmallCard href="/starting-out/equipment-supplies" title="Equipment & Supplies" icon="🔧" />
              </div>
            </div>

            {/* Pig Basics */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">📖 Pig Basics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <SmallCard href="/pig-basics/feeding" title="Feeding Your Pigs" icon="🍽️" />
                <SmallCard href="/pig-basics/fencing" title="Fencing" icon="🚧" />
                <SmallCard href="/pig-basics/housing" title="Housing & Shelter" icon="🏠" />
                <SmallCard href="/pig-basics/pasture" title="Raising on Pasture" icon="🌱" />
                <SmallCard href="/pig-basics/water" title="Water" icon="💧" />
              </div>
            </div>

            {/* Pig Health */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">💊 Pig Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <SmallCard href="/pig-health/disease-prevention" title="Disease Prevention" icon="🛡️" />
                <SmallCard href="/pig-health/health-wellbeing" title="Pig Health & Well-being" icon="❤️" />
                <SmallCard href="/pig-health/medicines" title="Health Medicines" icon="💊" />
              </div>
            </div>

            {/* Training & Books */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">🎓 Training & Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <SmallCard href="/training/offline" title="Offline Training" icon="👥" />
                <SmallCard href="/training/books" title="Books" icon="📚" />
                <SmallCard href="/publication/blogs" title="Blogs" icon="📝" />
                <SmallCard href="/publication/videos" title="Videos" icon="🎥" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Highlight */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-800">🎓 Offline Training Programs</h2>
          <p className="text-center text-gray-600 mb-12">Master pig farming with our expert-led training sessions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {trainingPrograms.map(program => (
              <TrainingCard key={program.id} program={program} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/training/offline" className="bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800">
              View All Training Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Books Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-800">📚 Our Books</h2>
          <p className="text-center text-gray-600 mb-12">Comprehensive guides written by pig farming experts</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/training/books" className="bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800">
              Shop All Books →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-green-800">About NJ Farming</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                NJ Farming is a leading platform dedicated to helping farmers succeed in small-scale pig farming. With years of industry experience and proven expertise, we provide comprehensive training, educational resources, and practical guidance.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is to empower farmers with knowledge and skills needed for profitable and sustainable pig farming operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Expert-led training programs</li>
                <li>✓ Comprehensive educational books</li>
                <li>✓ Practical farming solutions</li>
                <li>✓ Community support & guidance</li>
              </ul>
            </div>
            <div className="text-center bg-green-100 p-8 rounded-lg">
              <div className="text-6xl mb-4">🐷</div>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-green-800">5000+</p>
                  <p className="text-gray-600">Farmers Trained</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-800">50+</p>
                  <p className="text-gray-600">Books Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-800">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">What Farmers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-yellow-400 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.image}</span>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{testimonial.review}</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Pig Farming?</h2>
          <p className="text-xl mb-8">Join thousands of successful farmers who have benefited from our training and resources</p>
          <Link href="/contact" className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition inline-block">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🐷 Small Scale Pig Farming</h3>
              <p className="text-gray-300 mb-4">Your trusted partner in successful pig farming</p>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-yellow-300">📧</a>
                <a href="#" className="text-2xl hover:text-yellow-300">💬</a>
                <a href="#" className="text-2xl hover:text-yellow-300">📷</a>
                <a href="#" className="text-2xl hover:text-yellow-300">▶️</a>
                <a href="#" className="text-2xl hover:text-yellow-300">f</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">📧 Email: info@njfarming.com</p>
              <p className="text-gray-300 mb-2">💬 WhatsApp: +91 9999-999-999</p>
              <p className="text-gray-300">📱 Instagram: @njfarming</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📱 Instagram: @njfarming</li>
                <li>▶️ YouTube: NJ Farming</li>
                <li>f Facebook: NJ Farming</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Small Scale Pig Farming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function OfferCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition border-t-4 border-green-600">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function CategoryCard({ icon, title, desc, href }: { icon: string; title: string; desc: string; href: string }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-l-4 border-green-600 cursor-pointer">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}

function SmallCard({ href, title, icon }: { href: string; title: string; icon: string }) {
  return (
    <Link href={href}>
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer border border-green-200">
        <div className="text-3xl mb-2">{icon}</div>
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
      </div>
    </Link>
  );
}

function TrainingCard({ program }: { program: any }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
      <p className="text-gray-600 mb-4">{program.desc}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Duration: {program.duration}</p>
          <p className="text-2xl font-bold text-green-700">₹{program.price}</p>
        </div>
        <Link href="/training/offline" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Learn More
        </Link>
      </div>
    </div>
  );
}

function BookCard({ book }: { book: any }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-yellow-400 hover:shadow-xl transition">
      <div className="text-5xl mb-4">{book.image}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
      <p className="text-sm text-gray-500 mb-4">{book.pages} pages</p>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-green-700">₹{book.price}</p>
        <Link href="/training/books" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
          Shop
        </Link>
      </div>
    </div>
  );
}
