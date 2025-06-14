import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import Image from "next/image";

export default function Hero() {
    return (
        <FadeInWhenVisible>
            <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex flex-wrap items-center justify-center">
                    Automatizá tu negocio con
                    <span className="inline-block">
                        <Image
                            src="/botery-logo.png"
                            alt="botery"
                            width={174}
                            height={44}
                            className="w-[128px] sm:w-[174px] h-auto inline-block align-middle mt-1 ml-0 sm:ml-3"
                        />
                    </span>
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                    Mejorá la atención al cliente con bots de Whatsapp personalizados para tu negocio.
                </p>
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
