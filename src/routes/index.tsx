import { A } from "solid-start";

export default function Home() {
  return (
    <main class="grow flex flex-col px-8 py-16">
      <div class="container mx-auto grow flex flex-col justify-center items-center gap-8">
        <h1 class="text-6xl font-bold text-center">Epicwind CSS</h1>
        <p class="text-center">Copy and paste elements built with Tailwind.</p>
        <A
          class="bg-sky-500 text-white px-4 py-2 rounded-md"
          href="/documentation"
        >
          Get Started
        </A>
      </div>
    </main>
  );
}
