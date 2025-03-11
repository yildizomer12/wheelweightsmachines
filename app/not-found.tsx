export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">
          Page Not Found
        </h2>
        <div className="flex justify-center">
          <a
            href="/"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
