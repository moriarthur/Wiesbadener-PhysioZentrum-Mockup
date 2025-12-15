const teamMembers = [
  {
    name: "Dr. med. Anna Weber",
    role: "Leitende Physiotherapeutin",
    image: "https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwaHlzaW90aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1ODEwODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sabine Müller",
    role: "Sportrehabilitation-Spezialistin",
    image: "https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRoZXJhcGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjU4MTA4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Thomas Bauer",
    role: "Muskuloskelettaler Therapeut",
    image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcGh5c2lvdGhlcmFwaXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTgxMDg0NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 mb-4 text-3xl md:text-4xl font-bold">Unser Team</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Unsere erfahrenen und zertifizierten Physiotherapeuten sind darauf spezialisiert, Ihnen dabei zu helfen, Ihre Gesundheitsziele zu erreichen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-neutral-900 mb-2">{member.name}</h3>
              <p className="text-neutral-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
