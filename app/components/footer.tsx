export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 py-10 text-center text-sm text-neutral-500">
      <p className="font-medium text-neutral-700">
        Karen Cruz © {new Date().getFullYear()}
      </p>

      <p className="mt-2">
        Data Analyst · Data Scientist · Business Intelligence
      </p>

      <div className="mt-4 flex justify-center gap-6">
        <a
          href="https://github.com/Kcruz4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/karencruz-datascientist/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:karencruz0404@gmail.com"
          className="hover:text-neutral-900 transition"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
