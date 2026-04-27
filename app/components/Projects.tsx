import Link from 'next/link'

export function Projects() {
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
      title: 'Olist Operational Efficiency Analysis',
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

  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.link}
          href={project.link}
          target="_blank"
          className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              {project.impact}
            </p>

            <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <span className="text-sm font-semibold text-emerald-600">
              View Project →
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}
