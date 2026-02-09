export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900">
          Sai Karthik
        </a>
        <div className="flex gap-6">
          <a href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/projects" className="text-gray-700 hover:text-gray-900">
            Projects
          </a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
