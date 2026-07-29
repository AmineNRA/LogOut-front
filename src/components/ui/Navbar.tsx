export default function Navbar() {
    return (
        <nav className="text-app-text bg-app-bg flex justify-center p-5">
            <div className=" flex flex-1 justify-center align-center gap-10 border-y-1 border-y-app-border p-2 font-bold">
                <a href="/films" className="hover:text-app-hover">Films</a>
                <a href="#" className="hover:text-app-hover">Séries</a>
                <a href="#" className="hover:text-app-hover">Jeux vidéos</a>
            </div>
        </nav>
    )
}