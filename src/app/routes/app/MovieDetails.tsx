import ContentLayout from "@/components/layouts/content_layout";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MovieDetailView from "@/features/Movies/components/MovieDetailView";

export default function MovieDetails() {

    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MovieDetailView />
            </ContentLayout>
        </>
    )
}