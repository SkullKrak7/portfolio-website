export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© 2026 Your Name. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/SkullKrak7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
