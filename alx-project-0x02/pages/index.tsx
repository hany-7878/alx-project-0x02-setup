import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-6 bg-gray-500 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">Welcome to ALX Project 2 🎉</h2>
        <p className="mt-2">Your Next.js setup is working correctly!</p>
      </section>
    </main>
  );
}
