"use client";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🐷 NJ Pig Farming</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in successful pig farming
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-yellow-300">
                📧
              </a>
              <a href="#" className="text-2xl hover:text-yellow-300">
                💬
              </a>
              <a href="#" className="text-2xl hover:text-yellow-300">
                📷
              </a>
              <a href="#" className="text-2xl hover:text-yellow-300">
                ▶️
              </a>
              <a href="#" className="text-2xl hover:text-yellow-300">
                f
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">📧 Email: njfarming9@gmail.com</p>
            <p className="text-gray-300 mb-2">💬 WhatsApp: +91-7319723590</p>
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
        <div className="border-t border-green-700 pt-4 text-center text-gray-400">
          <p>&copy; 2026 NJ Pig Farming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
