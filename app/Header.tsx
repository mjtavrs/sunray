import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-10">
            <div className="relative flex-1">
                <input className="px-4 py-2 bg-stone-200 rounded-md w-80" type="text" placeholder="Search for a location here..." />
                <MagnifyingGlass className="absolute top-3 left-72 z-10 text-slate-400 cursor-pointer" weight="bold" />
            </div>
            <div className="flex items-center gap-10">
                <div className="flex flex-col">
                    <span>Monday,</span>
                    <span>7:00 AM</span>
                </div>
                <div className="flex flex-col">
                    <span>english</span>
                    <span>portuguese</span>
                    <span>spanish</span>
                </div>
                <div className="flex gap-3">
                    <span>Celsius</span>
                    <span>Fahrenheit</span>
                </div>
                <div className="flex gap-3">
                    <span>Light</span>
                    <span>Dark</span>
                </div>
            </div>
        </header>
    )
}