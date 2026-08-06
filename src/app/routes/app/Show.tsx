import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import ContentLayout from "@/components/layouts/content_layout"
import MediaList from "@/features/Movies/components/MediaList";

export default function Show() {
    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MediaList />
            </ContentLayout>
        </>
    )
}