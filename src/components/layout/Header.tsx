import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo siempre visible, alineado a la izquierda */}
        <Link href="#inicio" className="flex items-center">
          <Image
            src="/botery-logo.png"
            alt="Botery logo"
            width={128}
            height={44}
          />
        </Link>

        {/* Nav completo solo visible en pantallas >= 640px */}
        <nav className="hidden sm:flex space-x-4">
          <Link href="#inicio" className="text-gray-300 hover:text-teal-400">Inicio</Link>
          <Link href="#beneficios" className="text-gray-300 hover:text-teal-400">Beneficios</Link>
          <Link href="#instrucciones" className="text-gray-300 hover:text-teal-400">¿Cómo funciona?</Link>
          <Link href="#contacto" className="text-gray-300 hover:text-teal-400">Contacto</Link>
        </nav>

        {/* Solo Contacto visible en pantallas chicas */}
        <div className="sm:hidden">
          <Link href="#contacto" className="text-gray-300 hover:text-teal-400">Contacto</Link>
        </div>
      </div>
    </header>);
}
