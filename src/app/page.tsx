export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Automatizá tu negocio con WhatsApp</h1>
        <p className="text-xl md:text-2xl mb-8">Creamos bots personalizados que responden por vos 24/7.</p>
        <a
          href="/precios"
          className="bg-white text-teal-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Ver planes
        </a>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué usar un bot de WhatsApp?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Atención automática 24/7</h3>
            <p className="text-gray-300">Respondé consultas mientras dormís. Aumentá la eficiencia sin perder ventas.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Mejor conversión</h3>
            <p className="text-gray-300">Guiá a tus clientes automáticamente para que compren más rápido y fácil.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Integración personalizada</h3>
            <p className="text-gray-300">Adaptamos el bot a tu negocio: agendas, pagos, links o bases de datos.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gray-800 py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para automatizar tu WhatsApp?</h2>
        <p className="text-lg text-gray-300 mb-8">Elegí un plan y empezá hoy mismo a mejorar tu atención al cliente.</p>
        <a
          href="/precios"
          className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
        >
          Ver planes
        </a>
      </section>
    </main>
  );
}
