'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      label: 'Starting Out',
      items: [
        { label: 'Pig Breeds', href: '/starting-out/pig-breeds' },
        { label: 'Breeding & Gestation', href: '/starting-out/breeding-gestation' },
        { label: 'Farrowing', href: '/starting-out/farrowing' },
        { label: 'Finishing Pigs', href: '/starting-out/finishing-pigs' },
        { label: 'Equipment & Supplies', href: '/starting-out/equipment-supplies' },
      ],
    },
    {
      label: 'Pig Basics',
      items: [
        { label: 'Feeding Your Pigs', href: '/pig-basics/feeding' },
        { label: 'Fencing', href: '/pig-basics/fencing' },
        { label: 'Housing & Shelter', href: '/pig-basics/housing' },
        { label: 'Raising Pigs on Pasture', href: '/pig-basics/pasture' },
        { label: 'Water', href: '/pig-basics/water' },
      ],
    },
    {
      label: 'Pig Health',
      items: [
        { label: 'Disease Prevention', href: '/pig-health/disease-prevention' },
        { label: 'Pig Health & Well-being', href: '/pig-health/health-wellbeing' },
        { label: 'Health Medicines', href: '/pig-health/medicines' },
      ],
    },
    {
      label: 'Training',
      items: [
        { label: 'Offline Training', href: '/training/offline' },
        { label: 'Books', href: '/training/books' },
      ],
    },
    {
      label: 'Publication',
      items: [
        { label: 'Blogs', href: '/publication/blogs' },
        { label: 'Videos', href: '/publication/videos' },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b-2 border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <img
              src="/logo.jpeg"
              alt="NJ Farming Logo"
              className="h-12 w-12 object-cover rounded-full border border-green-200"
            />
            <span className="text-xl font-bold text-green-700">NJ Farming</span>
          </Link>

          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-1">
            {navigation.map((item) =>
              item.items ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="text-gray-700 font-semibold py-2 px-4 hover:text-green-700 transition duration-200">
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-300 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-20">
                    {item.items.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition duration-200 text-base"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-semibold py-2 px-4 hover:text-green-700 transition duration-200"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200 mt-4">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <>
                    <p className="font-bold text-green-700 py-2 px-4 text-lg">{item.label}</p>
                    <div className="pl-6 space-y-1">
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block py-2 text-gray-700 hover:text-green-700 text-base"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 px-4 font-semibold text-gray-700 hover:text-green-700 text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
