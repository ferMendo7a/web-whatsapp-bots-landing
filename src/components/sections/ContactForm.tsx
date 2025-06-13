"use client";

import useContactForm from "@/hooks/useContactForm";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function ContactForm() {
  const { form, enviado, handleChange, handleSubmit } = useContactForm();

  return (
    <FadeInWhenVisible delay={0.4}>
      <section
        id="contacto"
        className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-900 to-black text-white"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Contáctanos</h2>
          <p className="mb-8 text-center text-gray-300">
            Completá tus datos y nos comunicaremos contigo
          </p>

          {enviado ? (
            <div className="text-center bg-green-600 p-4 rounded-lg shadow">
              ¡Gracias por contactarnos! Te responderemos pronto.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded-lg shadow space-y-4"
            >
              <div>
                <label className="block mb-1 font-semibold">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 py-2 rounded text-white font-semibold transition"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
