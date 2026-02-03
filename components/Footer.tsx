import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-lilac-100 bg-gradient-to-b from-white to-lilac-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-semibold text-charcoal bg-gradient-to-r from-lilac-700 to-purple-700 bg-clip-text text-transparent">Rocket Launch Consulting</p>
            <p className="mt-1 text-sm text-gray-500">© 2026</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a
              href="mailto:hello@rocketlaunchconsulting.com"
              className="transition-colors hover:text-lilac-600"
            >
              hello@rocketlaunchconsulting.com
            </a>
            <a
              href="https://www.linkedin.com/company/rocket-launch-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lilac-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
