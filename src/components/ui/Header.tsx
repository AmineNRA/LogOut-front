import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-app-code-bg flex items-center justify-between p-4 font-header font-bold text-xl">
            <Link to="/"> <img src="/logo.webp" alt="Logo" className="max-w-3xs" /></Link>
            <div className="flex gap-5">
                <a href="#" className="text-app-text-h">Inscription</a>
                <a href="/connexion" className="text-app-text-h">Connexion</a>
            </div>
        </header>
    )
}