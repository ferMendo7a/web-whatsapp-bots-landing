import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-teal-400">BotZero</h1>
      <nav className="space-x-4">
        <Link href="#inicio" className="text-gray-300 hover:text-teal-400">Inicio</Link>
        <Link href="#beneficios" className="text-gray-300 hover:text-teal-400">Beneficios</Link>
        <Link href="#instrucciones" className="text-gray-300 hover:text-teal-400">¿Cómo funciona?</Link>
        <Link href="#contacto" className="text-gray-300 hover:text-teal-400">Contacto</Link>
      </nav>
    </header>
  );
}