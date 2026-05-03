import Link from 'next/link'

const projects = [
  {
    title: 'EV Charging Demand Forecasting',
    impact: 'R² improved to 0.93',
    image: '/ev-project.png',
    description:
      'Forecasted EV charging demand using machine learning, SQL analytics, Tableau dashboards, and real charging session data.',
    tech: ['Python', 'SQL', 'Tableau', 'Forecasting'],
    link: 'https://github.com/Kcruz4/ev-charging-demand-forecasting',
  },
  {
    title: 'Olist Operational Efficiency',
    impact: '95K+ orders analyzed',
    image: '/olist-project.png',
    description:
      'Power BI dashboard analyzing delivery delays, payment risk, revenue, and operational performance across e-commerce data.',
    tech: ['Power BI', 'Python', 'Business Analytics'],
    link: 'https://github.com/Kcruz4/E-commerce-Fintech-Logistics-Analysis.',
  },
  {
    title: 'Used Vehicle Market Analytics',
    impact: 'Live Streamlit app',
    image: '/vehicle-project.png',
    description:
      'Interactive web application for exploring used vehicle pricing, mileage trends, and market insights.',
    tech: ['Streamlit', 'Python', 'Plotly'],
    link: 'https://github.com/Kcruz4/Used-Vehicle-Market-Analytics-App',
  },
]

const skills = [
  'Python',
  'SQL',
  'Power BI',
  'Tableau',
  'Pandas',
  'Scikit-learn',
  'Streamlit',
  'Machine Learning',
  'Forecasting',
  'Data Visualization',
]

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-[#F8F7F3] text-[#1F2933] overflow-x-hidden">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        <div className="flex-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#6B8F71]">
            Data Analyst · Data Scientist
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Karen Cruz
          </h1>

          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[#4B5563]">
            Transforming complex data into clear business decisions through
            analytics, forecasting, dashboards, and data storytelling.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#6B8F71] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#55765B]"
            >
              View Projects
            </a>

            <Link
              href="https://www.linkedin.com/in/karencruz-datascientist/"
              target="_blank"
              className="rounded-full border border-[#6B8F71] px-6 py-3 text-sm font-semibold text-[#6B8F71] transition hover:bg-white"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:karencruz0404@gmail.com"
              className="rounded-full border border-[#E5E1D8] px-6 py-3 text-sm font-semibold text-[#1F2933] transition hover:bg-white"
            >
              Email
            </Link>
          </div>
        </div>

       <div className="flex-1">
  <div className="mx-auto h-[360px] w-[280px] overflow-hidden rounded-[2rem] border border-[#E5E1D8] bg-white shadow-xl md:h-[430px] md:w-[330px]">
    <Image
      src="/profile.jpeg"
      alt="Karen Cruz"
      width={330}
      height={430}
      className="h-full w-full object-cover"
    />
  </div>
</div>

      <section
        id="about"
        className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[360px_1fr]"
      >
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-[#E5E1D8] bg-white p-3 shadow-lg">
          <video
            src="/publicintro-video.mp4.mov"
            controls
            className="h-[520px] w-[292px] rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8F71]">
            About Me
          </p>

          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            I build practical data solutions that support smarter decisions.
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-[#4B5563]">
            I am a data professional focused on analytics, business intelligence,
            forecasting, and machine learning.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E1D8] bg-white p-5">
              <p className="text-sm text-[#6B7280]">Location</p>
              <p className="font-semibold">Australia 🇦🇺</p>
            </div>
            <div className="rounded-2xl border border-[#E5E1D8] bg-white p-5">
              <p className="text-sm text-[#6B7280]">Focus</p>
              <p className="font-semibold">Data & BI</p>
            </div>
            <div className="rounded-2xl border border-[#E5E1D8] bg-white p-5">
              <p className="text-sm text-[#6B7280]">Open to</p>
              <p className="font-semibold">Remote roles</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8F71]">
            Featured Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              className="group overflow-hidden rounded-3xl border border-[#E5E1D8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-sm font-semibold text-[#6B8F71]">
                  {project.impact}
                </p>

                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

                <p className="mb-5 text-sm leading-relaxed text-[#4B5563]">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#F1F3EE] px-3 py-1 text-xs font-medium text-[#55765B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <span className="text-sm font-semibold text-[#6B8F71]">
                  View project →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#E5E1D8] bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8F71]">
            Toolkit
          </p>

          <h2 className="mb-6 text-3xl font-bold">Skills & Tools</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#E5E1D8] px-4 py-2 text-sm font-medium text-[#374151]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#1F2933] p-8 text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Let’s connect</h2>

          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#E5E7EB]">
            I’m open to remote opportunities in data analytics, business
            intelligence, and data science.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:karencruz0404@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1F2933]"
            >
              Email Me
            </Link>

            <Link
              href="https://www.linkedin.com/in/karencruz-datascientist/"
              target="_blank"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              LinkedIn
            </Link>

            <Link
              href="https://github.com/Kcruz4"
              target="_blank"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
