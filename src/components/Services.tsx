import { Activity, Heart, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Sportverletzungs-Rehabilitation",
    description: "Spezialisierte Behandlung für Athleten und aktive Menschen zur Genesung von sportbedingten Verletzungen.",
  },
  {
    icon: Heart,
    title: "Manuelle Therapie",
    description: "Manuelle Techniken zur Schmerzlinderung, Verbesserung der Durchblutung und Wiederherstellung der Muskel- und Gelenkfunktion.",
  },
  {
    icon: Users,
    title: "Postoperative Behandlung",
    description: "Umfassende Rehabilitationsprogramme zur Unterstützung Ihrer Genesung nach Operationen.",
  },
  {
    icon: Zap,
    title: "Schmerzmanagement",
    description: "Wissenschaftlich fundierte Ansätze zur Behandlung chronischer Schmerzen und Verbesserung Ihrer Lebensqualität.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4 text-3xl md:text-4xl font-bold">Unsere Leistungen</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Wir bieten ein umfassendes Spektrum an physiotherapeutischen Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 border border-neutral-200 rounded-lg hover:border-[#0891b2] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#0891b2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#0891b2]" size={24} />
                </div>
                <h3 className="text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
