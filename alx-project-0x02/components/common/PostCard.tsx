import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
      <span className="text-sm text-gray-500 mt-3 block">User ID: {userId}</span>
    </div>
  );
}
