
export default function Header() {
    return (
        <header className="bg-app-code-bg flex items-center justify-between p-4 font-header font-bold font-xl">
            <img src="/logo.webp" alt="Logo" className="max-w-3xs" />
            <div className="flex gap-5">
                <a href="#" className="text-app-text-h">Inscription</a>
                <a href="#" className="text-app-text-h">Connexion</a>
            </div>
        </header>
    )
}