export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-4">Next.js Static Export App</h1>
      <p className="text-lg text-center max-w-2xl">
        This project is running from a static export, served by Nginx in Docker,
        and can be deployed automatically using GitHub Actions.
      </p>
    </main>
  );
}