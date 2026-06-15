'use client';

import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:njfarming9@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink);

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us 💬</h1>
          <p className="text-xl">Get in touch with our farming experts</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ContactInfo
              icon="📧"
              title="Email"
              details={['njfarming9@gmail.com', 'njfarming9@gmail.com']}
            />
            <ContactInfo
              icon="📞"
              title="Phone"
              details={['+91-7319723590', '+91-9730692319']}
            />
            <ContactInfo
              icon="📍"
              title="Address"
              details={['NJFarming Hub, Hazaribag, Jharkhand', 'India']}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitted && (
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center border-l-4 border-green-600">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Farmer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXX-XXXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us your query or message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 h-32 focus:outline-none focus:border-green-600 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Why Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-6">Why Contact Us?</h2>
              <div className="space-y-4">
                <ReasonCard
                  icon="🐄"
                  title="Animal Breed Consultation"
                  desc="Get expert advice on choosing the right breed for your farm"
                />
                <ReasonCard
                  icon="🍽️"
                  title="Nutrition Planning"
                  desc="Customized feeding plans for optimal animal health and productivity"
                />
                <ReasonCard
                  icon="💊"
                  title="Health & Wellness"
                  desc="Professional guidance on animal healthcare and disease prevention"
                />
                <ReasonCard
                  icon="🎓"
                  title="Training Programs"
                  desc="Participate in our educational workshops and training sessions"
                />
                <ReasonCard
                  icon="📦"
                  title="Product Orders"
                  desc="Bulk orders and custom packages for your farming needs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="What is your response time for inquiries?"
              a="We typically respond to inquiries within 24 hours during business days."
            />
            <FAQItem
              q="Do you offer consultation services?"
              a="Yes, we offer free initial consultation for all farming-related queries."
            />
            <FAQItem
              q="Can I place bulk orders?"
              a="Absolutely! We offer special packages and discounts for bulk orders."
            />
            <FAQItem
              q="Do you deliver outside India?"
              a="Currently, we deliver within India. International shipping may be arranged on request."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, title, details }: { icon: string; title: string; details: string[] }) {
  return (
    <div className="bg-green-50 rounded-lg p-6 text-center border-t-4 border-green-600">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-gray-800 mb-3">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-700">{detail}</p>
        ))}
      </div>
    </div>
  );
}

function ReasonCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
      <span className="text-3xl flex-shrink-0">{icon}</span>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-400">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center font-semibold text-gray-800 hover:text-green-700"
      >
        {q}
        <span className={`text-2xl transition ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && <p className="text-gray-600 mt-4">{a}</p>}
    </div>
  );
}
