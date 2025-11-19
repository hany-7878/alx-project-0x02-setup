import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.title}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.slice(0, 10).map((p: any) => ({
    userId: p.userId,
    title: p.title,
    content: p.body,
  }));

  return {
    props: {
      posts,
    },
  };
}
