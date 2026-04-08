export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">

      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Karen Cruz
        </h1>

        <p className="text-xl mb-3">
          Data Scientist | Python • SQL • Machine Learning
        </p>

        <p className="text-neutral-600 max-w-xl mx-auto">
          I analyze complex datasets to uncover patterns, build predictive models,
          and generate insights that improve business decision-making.
        </p>

        <div className="mt-4 text-sm text-neutral-500">
          Data Analysis • Machine Learning • Business Insights
        </div>
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

        {/* PROJECT 1 */}
        <div className="mb-8 border-b pb-6">
          <h3 className="text-lg font-semibold">
            Olist Operational Efficiency Analysis
          </h3>

          <ul className="list-disc ml-5 text-neutral-700 mt-3">
            <li>Analyzed 100k+ e-commerce transactions to identify delivery bottlenecks</li>
            <li>Detected high-risk payment patterns impacting revenue</li>
            <li>Provided data-driven recommendations to improve logistics efficiency</li>
          </ul>

          <p className="text-sm text-neutral-500 mt-2">
            Tools: Python, Pandas, SQL
          </p>

          <p className="text-sm text-neutral-500">
            Impact: Improved understanding of operational inefficiencies
          </p>
        </div>

        {/* PROJECT 2 */}
        <div className="mb-8 border-b pb-6">
          <h3 className="text-lg font-semibold">
            Automotive Analytics Web App
          </h3>

          <ul className="list-disc ml-5 text-neutral-700 mt-3">
            <li>Developed an interactive data app for vehicle analysis</li>
            <li>Implemented filters and dynamic visualizations for user insights</li>
            <li>Deployed a production-ready app using Streamlit</li>
          </ul>

          <p className="text-sm text-neutral-500 mt-2">
            Tools: Streamlit, Python, Render
          </p>

          <p className="text-sm text-neutral-500">
            Impact: Enabled interactive data exploration for users
          </p>
        </div>

        {/* PROJECT 3 */}
        <div>
          <h3 className="text-lg font-semibold">
            Vehicle Data Explorer
          </h3>

          <ul className="list-disc ml-5 text-neutral-700 mt-3">
            <li>Cleaned and processed raw datasets for analysis</li>
            <li>Explored correlations between key vehicle features</li>
            <li>Built visualizations to communicate insights effectively</li>
          </ul>

          <p className="text-sm text-neutral-500 mt-2">
            Tools: Python, Pandas, Matplotlib
          </p>

          <p className="text-sm text-neutral-500">
            Impact: Delivered insights through clear data visualization
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <p className="text-neutral-700">
          Python • SQL • Pandas • Machine Learning • Data Visualization • Streamlit • Git
        </p>
      </div>

      {/* CONTACT */}
      <div className="text-center mt-16">
        <p className="text-neutral-600">
          📫 Connect with me on GitHub
        </p>
      </div>

    </section>
  )
}
