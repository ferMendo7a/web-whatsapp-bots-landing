import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function Instructions() {
    return (
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
    );
}
