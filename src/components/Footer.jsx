export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h4 className="font-bold">Coursely</h4>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Coursely. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
