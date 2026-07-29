import { Search } from "lucide-react";


type searchBarProps = {
    setQuerySearch: React.Dispatch<React.SetStateAction<string>>
}

export default function searchBar({ setQuerySearch }: searchBarProps) {

    return (
        <section className="flex gap-2 items-center">
            <Search color="white" />
            <input name="search" type="text" placeholder="Rechercher..." onChange={(e) => setQuerySearch(e.target.value)} className="bg-[#273140] text-app-text inset-shadow-indigo-500/25 rounded-lg focus:text-black focus:bg-white focus:ring-2 focus:ring-[#3B82F6] border-1 border-app-border pl-2" />
        </section>
    )
}