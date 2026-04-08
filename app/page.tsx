import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      {/* HERO */}
      <div className="text-center mb-16">
        <img
          src="/profile-placeholder.png"
          alt="Karen Cruz"
          className="mx-auto rounded-full w-32 h-32 mb-4"
        />
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Karen Cruz
        </h1>
        <p className="text-xl mb-2">
          Data Scientist | Python • SQL • Machine Learning
        </p>
        <p className="text-neutral-600 max-w-xl mx-auto">
          I analyze complex datasets to uncover patterns, build predictive models,
          and generate insights that improve business decision-making.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* PROJECT 1 */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/olist-placeholder.png"
              alt="Olist Project"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Olist Operational Efficiency Analysis</h3>
            <p className="text-neutral-600 mb-3">
              Analyzed e-commerce logistics and payment data to identify bottlenecks and reduce risk.
            </p>
            <p className="text-sm text-neutral-500 mb-3">
              Tools: Python, Pandas, SQL
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Kcruz4/E-commerce-Fintech-Logistics-Analysis" className="underline text-blue-600">
                GitHub
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/automotive-placeholder.png"
              alt="Automotive Analytics Web App"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Automotive Analytics Web App</h3>
            <p className="text-neutral-600 mb-3">
              Built an interactive Streamlit app to explore vehicle data trends with filters and dynamic visualizations.
            </p>
            <p className="text-sm text-neutral-500 mb-3">
              Tools: Streamlit, Python, Render
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Kcruz4/Automotive-Analytics-Webapp" className="underline text-blue-600">
                GitHub
              </a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/vehicle-placeholder.png"
              alt="Vehicle Data Explorer"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Vehicle Data Explorer</h3>
            <p className="text-neutral-600 mb-3">
              Cleaned and analyzed vehicle datasets to find patterns and deliver actionable insights through visualizations.
            </p>
            <p className="text-sm text-neutral-500 mb-3">
              Tools: Python, Pandas, Matplotlib
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Kcruz4/VehicleDataExplorer" className="underline text-blue-600">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SKILLS */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
        <p className="text-neutral-700 text-center">
          Python • SQL • Pandas • Machine Learning • Data Visualization • Streamlit • Git
        </p>
      </div>

      {/* CONTACT */}
      <div className="text-center mt-16">
        <p className="text-neutral-600">
          📫 Connect with me on GitHub
        </p>
        <a href="https://github.com/Kcruz4" className="underline text-blue-600">
          GitHub Profile
        </a>
      </div>

    </section>
  )
}
