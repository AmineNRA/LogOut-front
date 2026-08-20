import { Routes, Route } from 'react-router-dom';
import { paths } from '../../config/paths';
import Home from './app/Home';
import Media from './app/Media';
import MediaDetails from './app/MediaDetails';
import Connexion from './app/Connexion';

function AppRouter() {

    return (
        <>
            <Routes>
                //Page d'acceuil
                <Route path={paths.home.path} element={<Home />} />
                //Page auth
                <Route path={paths.auth.root.path} element={<Connexion />} />

                //Page Media
                <Route path={paths.films.root.path} element={<Media mediaType="movie" />} />
                <Route path={paths.films.details.path} element={<MediaDetails mediaType="movie" />} />
                <Route path={paths.series.root.path} element={<Media mediaType="serie" />} />
                <Route path={paths.series.details.path} element={<MediaDetails mediaType="serie" />} />
            </Routes>
        </>
    )
}

export default AppRouter;