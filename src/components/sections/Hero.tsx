import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function Hero() {
    return (
        <FadeInWhenVisible>
            <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-5xl font-bold mb-4">Automatizá tu negocio con botery</h1>
                <p className="text-lg mb-8 max-w-xl">Aumentá tus ventas y mejorá la atención al cliente con bots personalizados para tu negocio.</p>
                <a
                    href="#contacto"
                    className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-md transition"
                >
                    Comenzar
                </a>
            </section>
        </FadeInWhenVisible>
    );
}
