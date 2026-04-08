import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">

      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Hi, I’m Karen Cruz
        </h1>
        <p className="text-xl mb-3">
          Data Scientist & Machine Learning Enthusiast
        </p>
        <p className="text-neutral-600">
          I turn data into insights that drive business decisions.
        </p>
      </div>

      {/* ABOUT */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-3">
          I’m a Data Scientist with experience in data analysis, machine learning,
          and building data-driven applications.
        </p>
        <p>
          I have worked on projects involving e-commerce analytics, predictive modeling,
          and interactive dashboards.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Olist Operational Efficiency Analysis</h3>
          <ul className="list-disc ml-5 text-neutral-700">
            <li>Analyzed e-commerce logistics and payment data</li>
            <li>Identified delivery delays and risk patterns</li>
            <li>Tools: Python, Pandas, SQL</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Automotive Analytics Web App</h3>
          <ul className="list-disc ml-5 text-neutral-700">
            <li>Built an interactive app using Streamlit</li>
            <li>Visualized vehicle trends and insights</li>
            <li>Deployed using Render</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Vehicle Data Explorer</h3>
          <ul className="list-disc ml-5 text-neutral-700">
            <li>Performed exploratory data analysis</li>
            <li>Identified patterns in vehicle datasets</li>
            <li>Tools: Python, Pandas, Matplotlib</li>
          </ul>
        </div>
      </div>

      {/* SKILLS */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p className="text-neutral-700">
          Python • SQL • Pandas • Machine Learning • Data Visualization • Streamlit • Git
        </p>
      </div>

      {/* BLOG (opcional) */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Blog</h2>
        <BlogPosts />
      </div>

    </section>
  )
}
