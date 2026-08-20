import { useQuery } from "@tanstack/react-query";
import getCast from "../api/getCast";
import Loading from "@/components/ui/loading/Loading";
import { type actor } from '@/types/actor';
import { useState } from "react";
import { useLocation } from "react-router-dom";

type CastProps = {
    id: number
}

export default function Cast({ id }: CastProps) {

    const location = useLocation()

    const [isExpanded, setIsExpanded] = useState(false);

    const { data: cast, isLoading, error } = useQuery({
        queryKey: ["cast", id],
        queryFn: () => getCast(id, location.pathname)
    });

    const castBegin = cast?.cast.slice(0, 10);
    const castEnd = cast?.cast;

    return (
        <>
            {isLoading ?
                <Loading /> :
                <>
                    <ul className="my-4 grid grid-flow-row grid-cols-5 gap-4">
                        {!isExpanded ? castBegin.map((actor: actor) => (
                            actor.profile_path &&
                            <li key={actor.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className="shadow-xl" />
                                <p className="text-center text-app-text">{actor.name}</p>
                                <p className="text-center text-app-hover font-bold">{actor.character}</p>
                            </li>
                        )) :
                            castEnd.map((actor: actor) => (
                                actor.profile_path &&
                                <li key={actor.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className="shadow-xl" />
                                    <p className="text-center text-app-text">{actor.name}</p>
                                    <p className="text-center text-app-hover font-bold">{actor.character}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="border border-3 border-app-border text-app-text font-bold bg-app-hover p-1 cursor-pointer mx-auto" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Voir moins' : 'Voir plus'}
                    </button>
                </>
            }
        </>
    )
}