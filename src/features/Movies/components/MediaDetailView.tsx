import { useLocation } from "react-router-dom";
import { getDetailMedia } from "../api/getDetailMedia";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/loading/Loading";
import { formatDate, formatRuntime } from "@/utils/format";
import StarRating from "@/components/ui/StarRating";
import GenreButton from "@/components/ui/genreButton/GenreButton";
import MediaDetailsTabs from "@/components/ui/mediaDetailsTabs/MediaDetailsTabs"
import Cast from "@/features/shared/cast/components/Cast";
import Reviews from "@/features/shared/reviews/components/Reviews";
import Informations from "@/features/shared/information/components/Information";

export default function MediaDetailView() {

    const location = useLocation()

    const { data: detailMedia, isLoading, error } = useQuery({
        queryKey: ['detailMedia', location.state],
        queryFn: () => getDetailMedia(location.state, location.pathname)
    });

    const listOfTabs = [
        { name: "Distribution", component: <Cast id={detailMedia?.id} /> },
        { name: "Avis", component: <Reviews id={detailMedia?.id} /> },
        { name: "Informations", component: <Informations id={detailMedia?.id} /> }

    ];

    console.log(detailMedia)

    return (
        <>
            {isLoading ?
                <Loading /> :
                <section className="grid grid-cols-[auto_1fr] gap-10 items-start max-w-5xl mx-auto">

                    <img src={`https://image.tmdb.org/t/p/w400${detailMedia.poster_path}`} className="shadow-xl rounded-lg my-auto" />

                    <div className="text-app-text-h flex flex-col">

                        <h2 className="font-bold text-4xl underline underline-offset-14  decoration-6 decoration-[#00B4D8]">{detailMedia.title ? detailMedia.title : detailMedia.name}</h2>
                        <p className="my-10 max-w-lg">{detailMedia.overview}</p>

                        <div className="flex flex-col gap-5">

                            <p>
                                <span className="font-bold">Date de sortie :</span> {detailMedia.release_date ? formatDate(detailMedia.release_date) : formatDate(detailMedia.first_air_date)}
                            </p>
                            <p>
                                <span className="font-bold">Genre :</span> {detailMedia.genres.map((genre: { id: number, name: string }) => (<GenreButton key={genre.id} name={genre.name} />))}
                            </p>
                            <p className="flex">
                                <span className="font-bold mr-2">Note :</span> {<StarRating rate={detailMedia.vote_average} />}
                            </p>
                            {detailMedia.runtime && <p><span className="font-bold mr-2">Durée :</span>{formatRuntime(detailMedia.runtime)}</p>}

                        </div>
                    </div>
                    <MediaDetailsTabs listOfTabs={listOfTabs} />
                </section>
            }
        </>
    )
}