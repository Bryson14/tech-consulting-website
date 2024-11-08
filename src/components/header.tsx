import { Laptop } from "lucide-react";

export default function Header() {
  return (
    <header className="container px-4 lg:px-6 h-14 flex items-center border-b">
      <a className="flex items-center justify-center" href="/">
        <Laptop className="h-6 w-6 mr-2" />
        <span className="font-bold">Smeiling Tech Consulting</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Home
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/clients"
        >
          Showcase
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
