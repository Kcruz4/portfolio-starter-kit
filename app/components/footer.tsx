import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E1D8] bg-[#F8F7F3] px-6 py-10 text-[#4B5563]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[#1F2933]">Karen Cruz</p>
          <p className="mt-1 text-sm">
            Data Analyst · Data Scientist · Business Intelligence
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-medium">
          <Link
            href="mailto:karencruz0404@gmail.com"
            className="transition hover:text-[#6B8F71]"
          >
            Email
          </Link>

          <Link
            href="https://github.com/Kcruz4"
            target="_blank"
            className="transition hover:text-[#6B8F71]"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/karencruz-datascientist/"
            target="_blank"
            className="transition hover:text-[#6B8F71]"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl text-xs text-[#6B7280]">
        © {new Date().getFullYear()} Karen Cruz. Built with Next.js and Vercel.
      </div>
    </footer>
  )
}
