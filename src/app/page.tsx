import Beneficios from "./components/Beneficios";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Contacto from "./contacto/page";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero */}
      <FadeInWhenVisible>
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Automatizá tu negocio con BotZero</h1>
          <p className="text-lg mb-8 max-w-xl">Aumentá tus ventas y mejorá la atención al cliente con bots personalizados para tu negocio.</p>
          <a
            href="#contacto"
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-md transition"
          >
            Comenzar
          </a>
        </section>
        </FadeInWhenVisible>
      
      {/* Beneficios */}
 {/*     <FadeInWhenVisible delay={0.5}>
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">¿Por qué elegir nuestros bots?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Automatización 24/7</h3>
            <p className="text-gray-300">Tus clientes reciben respuestas instantáneas sin importar la hora.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Integración fácil</h3>
            <p className="text-gray-300">Nos adaptamos a tu negocio y a las herramientas que ya usás.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Aumentá tus conversiones</h3>
            <p className="text-gray-300">Más velocidad en las respuestas = más ventas.</p>
          </div>
        </div>
      </section>
      </FadeInWhenVisible>
      */}

      <Beneficios />

      {/* Cómo funciona */}
      <FadeInWhenVisible delay={0.4}>
      <section id="instrucciones" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-12">¿Cómo funciona?</h2>
        <div className="space-y-10 text-left">
          <div>
            <h3 className="text-lg font-semibold">1. Te contactás con nosotros</h3>
            <p className="text-gray-300">Nos contás qué necesitás y diseñamos un bot a tu medida.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2. Implementamos el bot</h3>
            <p className="text-gray-300">En pocos días ya tenés tu bot funcionando en WhatsApp.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">3. Empezás a ver resultados</h3>
            <p className="text-gray-300">Tus clientes reciben atención rápida y efectiva.</p>
          </div>
        </div>
      </section>
      </FadeInWhenVisible>

      {/* CTA final */}
      
        <Contacto />
        {/*
        <h2 className="text-3xl font-semibold mb-4">¿Listo para empezar?</h2>
        <a
          href="/precios"
          className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-8 py-3 rounded-md transition"
        >
          Elegir mi plan
        </a>*/}
      
    </main>
  );
}
