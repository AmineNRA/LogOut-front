import ContentLayout from "@/components/layouts/content_layout";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MediaDetailView from "@/features/Movies/components/MediaDetailView";

export default function MovieDetails() {

    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MediaDetailView />
            </ContentLayout>
        </>
    )
}