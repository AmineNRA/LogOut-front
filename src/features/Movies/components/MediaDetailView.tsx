import { useLocation, useParams } from "react-router-dom";
import { getDetailMedia } from "../api/getDetailMedia";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/loading/Loading";
import MediaDetailsTabs from "@/components/ui/mediaDetailsTabs/MediaDetailsTabs"
import Cast from "@/features/shared/cast/components/Cast";
import Reviews from "@/features/shared/reviews/components/Reviews";
import Informations from "@/features/shared/information/components/Information";
import MediaSummary from "@/components/ui/MediaSummary/MediaSummary";

type MediaDetailViewProps = {
    mediaType: string
}

export default function MediaDetailView({ mediaType }: MediaDetailViewProps) {

    const location = useLocation()
    const { slug } = useParams();
    const id = Number(slug?.split('-').pop())

    const { data: detailMedia, isLoading, error } = useQuery({
        queryKey: ['detailMedia', id],
        queryFn: () => getDetailMedia(id || 0, location.pathname)
    });

    const listOfTabs = [
        { name: "Distribution", component: <Cast id={detailMedia?.id} /> },
        { name: "Avis", component: <Reviews id={detailMedia?.id} /> },
        { name: "Informations", component: <Informations id={detailMedia?.id} /> }

    ];

    console.log(detailMedia)

    if (error) return <div className="text-center py-10 text-red-500">Une erreur est survenue</div>;

    return (
        <>
            {isLoading ?
                <Loading /> :
                <section className="grid grid-cols-[auto_1fr] gap-10 items-start min-w-5xl max-w-5xl mx-auto">

                    <img src={`https://image.tmdb.org/t/p/w400${detailMedia.poster_path}`} className="shadow-xl rounded-lg my-auto" />

                    <div className="text-app-text-h flex flex-col">

                        <h2 className="font-bold text-4xl underline underline-offset-14 decoration-6 decoration-[#00B4D8] leading-13">{detailMedia.title ? detailMedia.title : detailMedia.name}</h2>
                        <p className="my-10 max-w-lg">{detailMedia.overview}</p>
                        <MediaSummary detailMedia={detailMedia} mediaType={mediaType} />
                    </div>
                    <MediaDetailsTabs listOfTabs={listOfTabs} />
                </section>
            }
        </>
    )
}