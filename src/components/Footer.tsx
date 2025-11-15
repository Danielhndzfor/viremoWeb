export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6D31E8] to-[#F4005E] flex items-center justify-center font-bold text-lg text-white">
            V
          </div>
          <h3 className="text-2xl font-bold text-gray-900">VÍREMO</h3>
        </div>
        <p className="text-gray-600 mb-4">Logística y transporte de excelencia</p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} VÍREMO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
