import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Karen Cruz
      </h1>

      <p className="mb-6 text-neutral-700 dark:text-neutral-300">
        Data Analyst and Data Scientist focused on transforming data into business value through analytics, machine learning, forecasting, and interactive dashboards.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
