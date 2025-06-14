"use client";

import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import { FaRobot, FaClock, FaChartLine } from "react-icons/fa";

export default function Beneficios() {
  return (
    <section id="beneficios" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Beneficios de Automatizar con botery</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Nuestros bots están diseñados para ahorrarte tiempo, mejorar la atención al cliente y ayudarte a escalar tu negocio.
          </p>
        </FadeInWhenVisible>

        <div className="grid gap-8 md:grid-cols-3 text-left items-stretch">
          <FadeInWhenVisible delay={0.1}>
            <div className="h-full bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300 flex flex-col">
              <FaRobot className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatización inteligente</h3>
              <p className="text-gray-400">
                Respuestas automáticas adaptadas a las necesidades de tu negocio, disponibles 24/7.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="h-full bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300 flex flex-col">
              <FaClock className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ahorro de tiempo</h3>
              <p className="text-gray-400">
                Atendé a cientos de clientes al mismo tiempo sin perder calidad en la atención.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="h-full bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300 flex flex-col">
              <FaChartLine className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escalabilidad</h3>
              <p className="text-gray-400">
                Prepará tu negocio para crecer sin preocuparte por la capacidad de respuesta.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
