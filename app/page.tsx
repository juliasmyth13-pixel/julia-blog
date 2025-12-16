import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Julia Smyth Blog
      </h1>
      <p className="mb-4">
        {`I am a junior at Villanova University pursuing a degree in Economics
        and minoring in Computer Science and Communications. `}
      </p>
      {/*<div className="my-8">
        <BlogPosts />
      </div>*/}
    </section>
  )
}
