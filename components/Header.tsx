export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">
              <span className="text-primary">ses</span>
              <span className="text-secondary">comp</span>
            </div>
          </div>
          
          <div className="text-right text-sm">
            <div className="font-bold text-primary">UNIVERSIDADE</div>
            <div className="text-gray-600">FEDERAL DO CEARÁ</div>
          </div>
        </div>
      </div>
    </header>
  )
}

