import { useQuery } from "@tanstack/react-query";
import getCast from "../api/getCast";
import Loading from "@/components/ui/loading/Loading";
import { type actor } from '@/types/actor';

type CastProps = {
    id: number
}

export default function Cast({ id }: CastProps) {

    const { data: cast, isLoading, error } = useQuery({
        queryKey: ["cast", id],
        queryFn: () => getCast(id)
    })

    return (
        <>
            {isLoading ?
                <Loading /> :
                <div className="my-4 grid grid-flow-row grid-cols-5 gap-4">
                    {cast.cast.map((actor: actor) => (
                        actor.profile_path &&
                        <div key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className="shadow-xl" />
                            <p className="text-center text-app-text">{actor.name}</p>
                            <p className="text-center text-app-hover font-bold">{actor.character}</p>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}