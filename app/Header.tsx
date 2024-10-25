export default function Header() {
    return (
        <header className="flex justify-between items-center p-8 border-b-2 border-b-gray-200">
            <div className="relative border-2 border-red-300">
                <input className="bg-gray-100 px-4 py-2 w-80" type="text" placeholder="Search for a location here" />
            </div>
            <div className="flex items-center gap-20">
                <div className="flex flex-col">
                    <span>English</span>
                    <span>Portuguese</span>
                    <span>Spanish</span>
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