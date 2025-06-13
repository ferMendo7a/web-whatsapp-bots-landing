"use client";

import { useState } from "react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    setEnviado(true);
  };

  return (
    <FadeInWhenVisible delay={0.4}>
    <section id="contacto" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contactános</h1>
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
              <label className="block mb-1 font-semibold">Correo electrónico</label>
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
              <label className="block mb-1 font-semibold">Número de teléfono</label>
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
