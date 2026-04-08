import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
  Karen Cruz
</h1>
      <p className="mb-4">
  {`Data Scientist focused on transforming data into actionable business insights using Python, SQL and Machine Learning. Passionate about solving real-world problems through data.`}
</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
