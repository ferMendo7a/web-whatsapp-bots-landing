import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-teal-400">WhatsApp Bots</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-200 hover:text-teal-400">Inicio</Link>
        <Link href="/precios" className="text-gray-200 hover:text-teal-400">Precios</Link>
      </nav>
    </header>
  );
}