import ContentLayout from "@/components/layouts/content_layout";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MovieList from "@/features/Movies/components/MovieList";

export default function Movies() {

    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MovieList />
            </ContentLayout>
        </>
    )
}