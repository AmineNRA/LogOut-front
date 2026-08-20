import ContentLayout from "@/components/layouts/content_layout";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MediaDetailView from "@/features/Movies/components/MediaDetailView";

type MediaDetailProps = {
    mediaType: string
}

export default function MovieDetails({ mediaType }: MediaDetailProps) {

    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MediaDetailView mediaType={mediaType} />
            </ContentLayout>
        </>
    )
}