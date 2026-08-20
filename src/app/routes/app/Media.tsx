import ContentLayout from "@/components/layouts/content_layout";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MediaList from "@/features/Movies/components/MediaList";

type MediaProps = {
    mediaType: string
}

export default function Media({ mediaType }: MediaProps) {

    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MediaList mediaType={mediaType} />
            </ContentLayout>
        </>
    )
}