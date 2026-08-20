import type { detailMedia } from "@/types/detailMedia";
import { formatDate, formatRuntime } from "@/utils/format";
import StarRating from "@/components/ui/StarRating";
import GenreButton from "@/components/ui/genreButton/GenreButton";

type MediaSummaryProps = {
    detailMedia: detailMedia
    mediaType: string
}

export default function MediaSummary({ detailMedia, mediaType }: MediaSummaryProps) {

    if (mediaType === "movie") {
        return (
            <div className="flex flex-col gap-5">

                <p>
                    <span className="font-bold">Date de sortie :</span> {formatDate(detailMedia.release_date)}
                </p>
                <p>
                    <span className="font-bold">Genre :</span> {detailMedia.genres.map((genre: { id: number, name: string }) => (<GenreButton key={genre.id} name={genre.name} />))}
                </p>
                <p className="flex">
                    <span className="font-bold mr-2">Note :</span> {<StarRating rate={detailMedia.vote_average} />}
                </p>
                <p><span className="font-bold mr-2">Durée :</span>{formatRuntime(detailMedia.runtime)}</p>

            </div>
        )
    }
    else if (mediaType === "serie") {
        return (
            <div className="flex flex-col gap-5">

                <p>
                    <span className="font-bold">Date de sortie :</span> {formatDate(detailMedia.first_air_date)}
                </p>
                <p>
                    <span className="font-bold">Genre :</span> {detailMedia.genres.map((genre: { id: number, name: string }) => (<GenreButton key={genre.id} name={genre.name} />))}
                </p>
                <p className="flex">
                    <span className="font-bold mr-2">Note :</span> {<StarRating rate={detailMedia.vote_average} />}
                </p>
                <p><span className="font-bold mr-2">Diffusion :</span>{detailMedia.in_production ? "En cours" : "Terminée"}</p>

            </div>
        )
    }
    else {
        return <div className="text-center py-10 text-red-500">Une erreur est survenue</div>
    }


}