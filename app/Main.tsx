import { Crosshair } from '@phosphor-icons/react/dist/ssr'

export default function Main() {
  return (
    <main className="p-8">
      <header className="flex items-center gap-5">
        <div className="cursor-pointer rounded-full bg-gray-100 p-2">
          <Crosshair size={24} className="text-zinc-600" />
        </div>
        <div>
          <p>Current Location</p>
          <p className="text-lg font-medium">Los Angeles, CA, USA</p>
        </div>
      </header>
      <main className="flex gap-5 py-5">
        <div className="h-52 max-w-[33.3%] flex-1 overflow-hidden rounded-lg border-2 border-red-200"></div>
      </main>
    </main>
  )
}
