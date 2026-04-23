import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/#about': {
    name: 'about',
  },
  '/#projects': {
    name: 'projects',
  },
  '/#contact': {
    name: 'contact',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 tracking-tight">
      <div className="lg:sticky lg:top-8">
        <nav className="flex flex-row items-center justify-between">
          <div className="flex flex-row space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="text-sm text-neutral-500">
            Karen Cruz
          </div>
        </nav>
      </div>
    </aside>
  )
}
