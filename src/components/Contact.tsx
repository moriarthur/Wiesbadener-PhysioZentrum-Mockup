import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze mit Ihnen in Verbindung setzen!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4 text-3xl md:text-4xl font-bold">Kontakt</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Bereit, Ihren Weg zu besserer Gesundheit zu beginnen? Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-neutral-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0891b2] text-white py-3 rounded-lg hover:bg-[#0e7490] transition-colors font-semibold"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-neutral-900 mb-6 text-2xl font-semibold">Kontakt Informationen</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#0891b2] mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-700">Wilhelmstraße 45</p>
                    <p className="text-neutral-700">65183 Wiesbaden</p>
                    <p className="text-neutral-700">Deutschland</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-[#0891b2] mr-4 flex-shrink-0" size={20} />
                  <p className="text-neutral-700">+49 611 1234567</p>
                </div>

                <div className="flex items-center">
                  <Mail className="text-[#0891b2] mr-4 flex-shrink-0" size={20} />
                  <p className="text-neutral-700">info@physiozentrum-wiesbaden.de</p>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#0891b2] mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-700">Montag - Freitag: 08:00 - 19:00 Uhr</p>
                    <p className="text-neutral-700">Samstag: 09:00 - 17:00 Uhr</p>
                    <p className="text-neutral-700">Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-neutral-900 mb-3 text-xl font-semibold">Notfalltermine</h4>
              <p className="text-neutral-600">
                Wir verstehen, dass Verletzungen keinen Zeitplan haben. Rufen Sie uns an für Same-Day-Notfalltermine, wenn verfügbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
