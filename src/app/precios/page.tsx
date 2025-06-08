export default function Precios() {
  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Planes y Precios</h1>
        <p className="text-lg mb-12 text-gray-300">Elegí el plan que mejor se adapte a tu negocio.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-2">Básico</h2>
            <p className="text-gray-400 mb-4">Ideal para emprendedores.</p>
            <p className="text-3xl font-bold mb-4 text-teal-400">$9.990</p>
            <ul className="text-left text-sm space-y-2 mb-4 text-gray-300">
              <li>✅ 1 bot de WhatsApp</li>
              <li>✅ Soporte por email</li>
              <li>✅ Respuestas básicas</li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Contratar
            </button>
          </div>

          {/* Plan Pro */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-teal-500 scale-105">
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-gray-400 mb-4">Para negocios que crecen.</p>
            <p className="text-3xl font-bold mb-4 text-teal-400">$19.990</p>
            <ul className="text-left text-sm space-y-2 mb-4 text-gray-300">
              <li>✅ Hasta 3 bots</li>
              <li>✅ Soporte personalizado</li>
              <li>✅ Integración con agenda</li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Contratar
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-2">Premium</h2>
            <p className="text-gray-400 mb-4">Soluciones a medida.</p>
            <p className="text-3xl font-bold mb-4 text-teal-400">$29.990</p>
            <ul className="text-left text-sm space-y-2 mb-4 text-gray-300">
              <li>✅ Bots ilimitados</li>
              <li>✅ Soporte 24/7</li>
              <li>✅ Flujos personalizados</li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Contratar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
