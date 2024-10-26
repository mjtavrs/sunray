import Header from './Header'
import Main from './Main'

export default function Home() {
  return (
    <div className="h-dvh w-dvw bg-gray-200 p-20 text-sm text-zinc-600">
      <div className="h-full w-full rounded-lg bg-white">
        <Header />
        <Main />
      </div>
    </div>
  )
}
