import { useQuery } from "@tanstack/react-query";
import { getInformations } from "../api/getInformation";
import Loading from "@/components/ui/loading/Loading";
import GenreButton from "@/components/ui/genreButton/GenreButton";
import { formatNumberWithSpaces } from "@/utils/format";
import { useLocation } from "react-router-dom";

type InformationsProp = {
    id: number
}

type country = {
    iso_3166_1: string,
    name: string,
}

type company = {
    id: number,
    logo_path: string,
    name: string
}

export default function Informations({ id }: InformationsProp) {

    const location = useLocation();

    const { data: informations, isLoading, error } = useQuery({
        queryKey: ["informations"],
        queryFn: () => getInformations(id, location.pathname)
    })

    return (
        <>
            {isLoading ? <Loading /> :
                <div className="text-app-text flex flex-col gap-3 mt-2">
                    <p><span className="font-bold">Pays d'origine : </span>{informations.production_countries.map((country: country) => <GenreButton name={country.name} />)}</p>
                    {informations.budget && <p><span className="font-bold">Budget : </span>{formatNumberWithSpaces(informations.budget)}$</p>}
                    <p><span className="font-bold">Producteur : </span>{informations.production_companies.map((company: company) => <GenreButton name={company.name} />)}</p>
                    {informations.imdb_id && <p><span className="font-bold">Lien : </span><a href={`https://www.imdb.com/fr/title/${informations.imdb_id}`}><GenreButton name="IMDB" /></a></p>}
                </div>
            }
        </>
    )
}