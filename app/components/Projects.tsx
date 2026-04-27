import Link from 'next/link'

export function Projects() {
  const projects = [   {     title: 'EV Charging Demand Forecasting',     impact: 'R² improved to 0.93',     image: '/ev-project.png',     description:       'Forecasted EV charging demand using machine learning, SQL analytics, Tableau dashboards, and real charging session data.',     tech: ['Python', 'SQL', 'Tableau', 'Forecasting'],     link: 'https://github.com/Kcruz4/ev-charging-demand-forecasting',   },   {     title: 'Olist Operational Efficiency',     impact: '95K+ orders analyzed',     image: '/olist-project.png',     description:       'Power BI dashboard analyzing delivery delays, payment risk, revenue, and operational performance across e-commerce data.',     tech: ['Power BI', 'Python', 'Business Analytics'],     link: 'https://github.com/Kcruz4/E-commerce-Fintech-Logistics-Analysis.',   },   {     title: 'Used Vehicle Market Analytics',     impact: 'Live Streamlit app',     image: '/vehicle-project.png',     description:       'Interactive web application for exploring used vehicle pricing, mileage trends, and market insights.',     tech: ['Streamlit', 'Python', 'Plotly'],     link: 'https://github.com/Kcruz4/Used-Vehicle-Market-Analytics-App',   }, ]   {     title: 'EV Charging Demand Forecasting',     impact: 'R² improved to 0.93',     image: '/ev-project.png',     description:       'Forecasted EV charging demand using machine learning, SQL analytics, Tableau dashboards, and real charging session data.',     tech: ['Python', 'SQL', 'Tableau', 'Forecasting'],     link: 'https://github.com/Kcruz4/ev-charging-demand-forecasting',   },   {     title: 'Olist Operational Efficiency',     impact: '95K+ orders analyzed',     image: '/olist-project.png',     description:       'Power BI dashboard analyzing delivery delays, payment risk, revenue, and operational performance across e-commerce data.',     tech: ['Power BI', 'Python', 'Business Analytics'],     link: 'https://github.com/Kcruz4/E-commerce-Fintech-Logistics-Analysis.',   },   {     title: 'Used Vehicle Market Analytics',     impact: 'Live Streamlit app',     image: '/vehicle-project.png',     description:       'Interactive web application for exploring used vehicle pricing, mileage trends, and market insights.',     tech: ['Streamlit', 'Python', 'Plotly'],     link: 'https://github.com/Kcruz4/Used-Vehicle-Market-Analytics-App',   }, ]
    {
      title: 'EV Charging Demand Forecasting & Utilization Analytics',
      description:
        'Forecasting EV charging demand using machine learning, SQL analytics, and real charging session data to support smarter infrastructure planning.',
      link: 'https://github.com/Kcruz4/ev-charging-demand-forecasting',
    },
    {
      title: 'Vehicle Data Explorer',
      description:
        'Interactive Streamlit dashboard exploring used vehicle pricing, mileage trends, and market insights with Plotly visualizations.',
      link: 'https://github.com/Kcruz4/VehicleDataExplorer',
    },
    {
      title: 'Olist Operational Efficiency Analysis',
      description:
        'Business intelligence project analyzing e-commerce, fintech, and logistics performance to uncover operational risks and optimization opportunities.',
      link: 'https://github.com/Kcruz4/E-commerce-Fintech-Logistics-Analysis.',
    },
  ]

  return (
    <div>
      {projects.map((project) => (
        <Link
          key={project.link}
          href={project.link}
          target="_blank"
          className="flex flex-col space-y-1 mb-8"
        >
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg font-semibold">
            {project.title}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  )
}
