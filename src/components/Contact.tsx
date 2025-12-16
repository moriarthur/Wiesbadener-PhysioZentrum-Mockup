import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name muss mindestens 2 Zeichen lang sein";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
      isValid = false;
    }

    // Phone validation (German format)
    const phoneRegex = /^(\+49|0)[1-9][0-9]{1,14}$|^(\+49|0)[1-9][0-9]{1,14}[-\s\/]?[0-9]{1,10}$/;
    const cleanPhone = formData.phone.replace(/[\s-\/]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefonnummer ist erforderlich";
      isValid = false;
    } else if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
      newErrors.phone = "Bitte geben Sie eine gültige Telefonnummer ein";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nachricht muss mindestens 10 Zeichen lang sein";
      isValid = false;
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Nachricht darf nicht länger als 500 Zeichen sein";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      setShowSuccess(true);
      setIsHiding(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsHiding(true);
        setTimeout(() => setShowSuccess(false), 300);
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
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
          <div>
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
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                    style={{
                      borderColor: errors.name ? '#dc2626' : 'var(--color-neutral-300)'
                    }}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm" style={{ color: '#dc2626' }}>{errors.name}</p>
                  )}
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
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                    style={{
                      borderColor: errors.email ? '#dc2626' : 'var(--color-neutral-300)'
                    }}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm" style={{ color: '#dc2626' }}>{errors.email}</p>
                  )}
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
                    placeholder="z.B. +49 123 4567890 oder 0123 4567890"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                    style={{
                      borderColor: errors.phone ? '#dc2626' : 'var(--color-neutral-300)'
                    }}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm" style={{ color: '#dc2626' }}>{errors.phone}</p>
                  )}
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
                    placeholder="Ihre Nachricht (mindestens 10 Zeichen, maximal 500 Zeichen)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2] resize-none"
                    style={{
                      borderColor: errors.message ? '#dc2626' : 'var(--color-neutral-300)'
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm" style={{ color: '#dc2626' }}>{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0891b2] text-white py-3 rounded-lg hover:bg-[#0e7490] transition-colors font-semibold"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Spacer for success banner */}
            <div className="h-12"></div>

            {/* Success Banner */}
            {showSuccess && (
              <div
                className="p-6 border rounded-lg flex items-start"
                style={{
                  backgroundColor: '#f0fdf4',
                  borderColor: '#86efac',
                  transition: 'all 0.3s ease-in-out',
                  opacity: isHiding ? 0 : 1,
                  transform: isHiding ? 'translateY(-8px) scale(0.95)' : 'translateY(0) scale(1)'
                }}
              >
                <CheckCircle
                  size={24}
                  style={{
                    color: '#16a34a',
                    flexShrink: 0,
                    marginTop: '2px',
                    marginRight: '24px'
                  }}
                />
                <div>
                  <h4 style={{ color: '#14532d', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>Nachricht erfolgreich gesendet!</h4>
                  <p style={{ color: '#15803d', marginTop: '4px', fontFamily: 'var(--font-sans)' }}>
                    Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze mit Ihnen in Verbindung setzen!
                  </p>
                </div>
              </div>
            )}
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
