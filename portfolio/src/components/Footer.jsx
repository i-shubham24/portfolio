export default function Footer() {
  return (
    <footer className="bg-violet-900 dark:bg-gray-950 text-violet-200 dark:text-gray-400 py-8 text-center transition-colors duration-500 border-t border-transparent dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-2">© {new Date().getFullYear()} Shubhampreet Singh. All rights reserved.</p>
        <p className="text-sm text-violet-400 dark:text-gray-600 transition-colors duration-500">Built with React, Vite, Tailwind v4, and GSAP.</p>
      </div>
    </footer>
  );
}