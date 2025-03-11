export default function LocalizedNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">
          Sayfa Bulunamadı
        </h2>
        <div className="flex justify-center">
          <a
            href="/"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}
