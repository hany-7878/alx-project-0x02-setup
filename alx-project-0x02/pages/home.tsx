import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Card title="Example" content="This is a reusable card component." />
    </div>
  );
}
