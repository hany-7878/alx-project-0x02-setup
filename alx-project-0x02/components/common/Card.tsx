import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
