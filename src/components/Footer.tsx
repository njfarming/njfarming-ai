"use client";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🐷 NJ Farming</h3>
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
            <p className="text-gray-300 mb-2">💬 WhatsApp: +91-9730692319</p>
            <p className="text-gray-300">📱 Instagram: @njfarming</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Social Media</h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.instagram.com/nj_farming1818/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-200 inline-flex items-center"
                >
                  📱 Instagram: @njfarming
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@njfarming1818" // Replace with your exact YouTube handle URL if different
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-200 inline-flex items-center"
                >
                  ▶️ YouTube: NJ Farming
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nj_farming1818/" // Replace with your exact Facebook page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-200 inline-flex items-center"
                >
                  🔵 Facebook: NJ Farming
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-700 pt-4 text-center text-gray-400">
          <p>&copy; 2026 NJ Farming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
