import Link from "next/link";

export function BlogPosts() {
  const projects = [
    {
      title: "Olist Operational Efficiency Analysis",
      description:
        "End-to-end analysis of e-commerce, fintech and logistics performance. Identified delivery delays, payment risk factors and high-risk product categories.",
      link: "https://github.com/Kcruz4/E-commerce-Fintech-Logistics-Analysis",
    },
    {
      title: "Automotive Analytics Web App",
      description:
        "Interactive web application for vehicle data analysis and visualization.",
      link: "https://github.com/Kcruz4/Automotive-Analytics-Webapp",
    },
    {
      title: "Vehicle Data Explorer",
      description:
        "Exploratory data analysis project focused on uncovering patterns in vehicle datasets.",
      link: "https://github.com/Kcruz4/VehicleDataExplorer",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target="_blank"
          className="flex flex-col space-y-1 mb-6"
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
  );
}
