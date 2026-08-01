import { useLocation } from "react-router-dom";
import { getDetailMovie } from "../api/getDetailMovie";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/loading/Loading";
import { formatDate, formatRuntime } from "@/utils/format";
import StarRating from "@/components/ui/StarRating";
import GenreButton from "@/components/ui/genreButton/GenreButton";
import MediaDetailsTabs from "@/components/ui/mediaDetailsTabs/MediaDetailsTabs"
import Cast from "@/features/shared/cast/components/Cast";
import Reviews from "@/features/shared/reviews/components/Reviews";
import Informations from "@/features/shared/information/components/Information";

export default function MovieDetailView() {

    const location = useLocation()

    const { data: detailMovie, isLoading, error } = useQuery({
        queryKey: ['detailMovie'],
        queryFn: () => getDetailMovie(location.state)
    })

    const listOfTabs = [
        { name: "Distribution", component: <Cast id={detailMovie?.id} /> },
        { name: "Avis", component: <Reviews id={detailMovie?.id} /> },
        { name: "Informations", component: <Informations id={detailMovie?.id} /> }

    ]

    return (
        <>
            {isLoading ?
                <Loading /> :
                <section className="grid grid-cols-[auto_1fr] gap-10 items-start max-w-5xl mx-auto">

                    <img src={`https://image.tmdb.org/t/p/w400${detailMovie.poster_path}`} className="shadow-xl rounded-lg my-auto" />

                    <div className="text-app-text-h flex flex-col">

                        <h2 className="font-bold text-4xl underline underline-offset-14  decoration-6 decoration-[#00B4D8]">{detailMovie.title}</h2>
                        <p className="my-10 max-w-lg">{detailMovie.overview}</p>

                        <div className="flex flex-col gap-5">

                            <p>
                                <span className="font-bold">Date de sortie :</span> {formatDate(detailMovie.release_date)}
                            </p>
                            <p>
                                <span className="font-bold">Genre :</span> {detailMovie.genres.map((genre: { id: number, name: string }) => (<GenreButton key={genre.id} name={genre.name} />))}
                            </p>
                            <p className="flex">
                                <span className="font-bold">Note :</span> {<StarRating rate={detailMovie.vote_average} />}
                            </p>
                            <p><span className="font-bold mr-2">Durée :</span>{formatRuntime(detailMovie.runtime)}</p>

                        </div>
                    </div>
                    <MediaDetailsTabs listOfTabs={listOfTabs} />
                </section>
            }
        </>
    )
}