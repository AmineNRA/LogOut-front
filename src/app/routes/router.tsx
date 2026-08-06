import { Routes, Route } from 'react-router-dom';
import { paths } from '../../config/paths';
import Home from './app/Home';
import Movies from './app/Movies';
import MediaDetails from './app/MediaDetails';
import Show from './app/Show';

function AppRouter() {

    return (
        <>
            <Routes>
                <Route path={paths.home.path} element={<Home />} />
                <Route path={paths.films.root.path} element={<Movies />} />
                <Route path={paths.films.details.path} element={<MediaDetails />} />
                <Route path={paths.series.root.path} element={<Show />} />
                <Route path={paths.series.details.path} element={<MediaDetails />} />
            </Routes>
        </>
    )
}

export default AppRouter;