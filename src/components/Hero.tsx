export function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-[#0891b2]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-neutral-900 mb-6 text-4xl md:text-5xl font-bold">
            Ihr Weg zur Genesung beginnt hier
          </h1>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto text-lg">
            Professionelle Physiotherapie individuell auf Sie abgestimmt. Unser erfahrenes Team hilft Ihnen, optimale Gesundheit und Beweglichkeit zu erlangen.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0891b2] text-white px-8 py-3 rounded-lg hover:bg-[#0e7490] transition-colors font-semibold"
          >
            Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
