import ContentLayout from "@/components/layouts/content_layout"
import Caroussel from "@/components/ui/carrousel/Carrousel";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import MarketingCard from "@/features/MarketingCard/component/MarketingCard";

export default function Test() {

    return (
        <>
            <Header />
            <Navbar />
            <ContentLayout>
                <MarketingCard
                    title="Découvrez"
                    description="Explorez notre catalogue complet de films, de séries et de jeux vidéo. Suivez les nouveautés et tendances du jour au même endroit. Explorez notre catalogue complet de films, de séries et de jeux vidéo. Suivez les nouveautés et tendances du jour au même endroit."
                    imageSrc="/grey_case.png"
                    imageAlt="grey-case"
                />
                <MarketingCard
                    title="Créez"
                    description="Construisez votre profil sur-mesure et organisez vos listes de visionnage selon vos propres règles. Triez votre Watchlist par année de sortie, par genre cinématographique ou selon vos préférences du moment. Gardez un contrôle total sur vos envies pour ne plus jamais perdre de temps à chercher quoi regarder."
                    imageSrc="/grey_case.png"
                    imageAlt="grey-case"
                    reverse
                />
                <MarketingCard
                    title="Commentez"
                    description="Ne soyez plus simple spectateur : devenez critique en partageant vos retours d'expérience avec l'ensemble de la plateforme. Notez vos visionnages sur une échelle de 5 étoiles, rédigez des avis constructifs et faites vibrer l'espace communautaire avec vos retours passionnés. C'est ici que le débat cinématographique prend vie."
                    imageSrc="/grey_case.png"
                    imageAlt="grey-case"
                />
                <Caroussel />
            </ContentLayout>
        </>
    )
}
