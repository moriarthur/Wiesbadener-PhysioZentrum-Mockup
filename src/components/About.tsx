export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-neutral-900 mb-6 text-3xl md:text-4xl font-bold">Über das Wiesbadener PhysioZentrum</h2>
            <p className="text-neutral-600 mb-4 text-lg">
              Im Wiesbadener PhysioZentrum glauben wir daran, den ganzen Menschen zu behandeln, nicht nur die Verletzung. Mit über 15 Jahren kombinierter Erfahrung ist unser Team von zertifizierten Physiotherapeuten darauf spezialisiert, persönliche Betreuung zu bieten, die auf Ihre einzigartigen Bedürfnisse eingeht.
            </p>
            <p className="text-neutral-600 mb-4 text-lg">
              Wir nutzen wissenschaftlich fundierte Techniken und modernste Technologie, um sicherzustellen, dass Sie die bestmögliche Behandlung erhalten. Ob Sie sich von einer Verletzung erholen, chronische Schmerzen bewältigen oder Ihre körperliche Leistungsfähigkeit verbessern möchten – wir sind hier, um Sie bei jedem Schritt zu unterstützen.
            </p>
            <p className="text-neutral-600 text-lg">
              Unsere moderne Klinik ist mit hochmodernen Einrichtungen ausgestattet, die eine komfortable und heilsame Umgebung für alle unsere Patienten schaffen.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1ODEwODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Wiesbadener PhysioZentrum Innenansicht"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
