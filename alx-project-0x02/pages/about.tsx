import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="p-6 space-y-4">
      <Header/>
      <h1 className="text-3xl font-bold">About Page</h1>

      <div className="flex gap-4 flex-wrap mt-4">
        <Button size="small" shape="rounded-sm">Small / Rounded-Sm</Button>
        <Button size="medium" shape="rounded-md">Medium / Rounded-Md</Button>
        <Button size="large" shape="rounded-full">Large / Rounded-Full</Button>
      </div>
    </div>
  );
}
