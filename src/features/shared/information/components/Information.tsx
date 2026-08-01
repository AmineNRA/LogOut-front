import { useQuery } from "@tanstack/react-query";
import { getInformations } from "../api/getInformation";
import Loading from "@/components/ui/loading/Loading";
import GenreButton from "@/components/ui/genreButton/GenreButton";

type InformationsProp = {
    id: number
}

export default function Informations({ id }: InformationsProp) {

    const { data: informations, isLoading, error } = useQuery({
        queryKey: ["informations"],
        queryFn: () => getInformations(id)
    })

    return (
        <>
            {isLoading ? <Loading /> :
                <div className="text-app-text">
                    <p><span className="font-bold">Pays d'origine : </span>{informations.production_countries.map((country) => (country.name))}</p>
                    <p><span className="font-bold">Budget : </span>{informations.budget}</p>
                    <p><span className="font-bold">Producteur : </span>{informations.production_companies.map((company) => (company.name))}</p>
                    <p><span className="font-bold">Lien : </span><a href={`https://www.imdb.com/fr/title/${informations?.imdb_id}`}><GenreButton name="IMDB" /></a></p>
                </div>
            }
        </>
    )
}