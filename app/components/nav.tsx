import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E1D8]/70 bg-[#F8F7F3]/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-bold tracking-tight text-[#1F2933]">
          Karen Cruz
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#4B5563] md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-[#6B8F71]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <Link
          href="https://www.linkedin.com/in/karencruz-datascientist/"
          target="_blank"
          className="rounded-full border border-[#6B8F71] px-4 py-2 text-xs font-semibold text-[#6B8F71] transition hover:bg-[#6B8F71] hover:text-white"
        >
          LinkedIn
        </Link>
      </nav>
    </header>
  )
}
