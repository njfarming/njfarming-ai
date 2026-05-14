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
      ]
    },
    {
      label: 'Pig Basics',
      items: [
        { label: 'Feeding Your Pigs', href: '/pig-basics/feeding' },
        { label: 'Fencing', href: '/pig-basics/fencing' },
        { label: 'Housing & Shelter', href: '/pig-basics/housing' },
        { label: 'Raising Pigs on Pasture', href: '/pig-basics/pasture' },
        { label: 'Water', href: '/pig-basics/water' },
      ]
    },
    {
      label: 'Pig Health',
      items: [
        { label: 'Disease Prevention', href: '/pig-health/disease-prevention' },
        { label: 'Pig Health & Well-being', href: '/pig-health/health-wellbeing' },
        { label: 'Health Medicines', href: '/pig-health/medicines' },
      ]
    },
    {
      label: 'Training',
      items: [
        { label: 'Offline Training', href: '/training/offline' },
        { label: 'Books', href: '/training/books' },
      ]
    },
    {
      label: 'Publication',
      items: [
        { label: 'Blogs', href: '/publication/blogs' },
        { label: 'Videos', href: '/publication/videos' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            🐷 Small Scale Pig Farming
          </Link>

          <button
            className="md:hidden text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              item.items ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="hover:text-yellow-300 transition font-semibold py-2">
                    {item.label} ▼
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-green-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    {item.items.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2 hover:bg-green-700 first:rounded-t-lg last:rounded-b-lg"
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
                  className="hover:text-yellow-300 transition font-semibold py-2"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <>
                    <p className="font-bold text-yellow-300 py-2">{item.label}</p>
                    <div className="pl-4 space-y-1">
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block py-1 text-gray-200 hover:text-yellow-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          • {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-yellow-300"
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
