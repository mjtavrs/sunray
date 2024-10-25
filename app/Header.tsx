import LanguageSelector from './LanguageSelector'

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-b-gray-200 p-8 font-medium">
      <div className="relative">
        <input
          className="w-80 rounded-md bg-gray-100 px-4 py-2"
          type="text"
          placeholder="Search for a location here"
        />
      </div>
      <div className="flex items-center gap-20">
        <div>
          <LanguageSelector />
        </div>
        <div>
          <span>Celsius</span>
          <span>Fahrenheit</span>
        </div>
        <div>
          <span>Light</span>
          <span>Dark</span>
        </div>
      </div>
    </header>
  )
}
