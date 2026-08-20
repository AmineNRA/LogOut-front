import ContentLayout from "@/components/layouts/content_layout";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import LoginForm from "@/features/Auth/components/LoginForm";

export default function Connexion() {

    console.log("AAAAAAAA")
    return (
        <div>
            <Header />
            <Navbar />
            <ContentLayout>
                <LoginForm />
            </ContentLayout>
        </div>
    )
}