import { Routes, Route } from 'react-router-dom';
import { paths } from '../../config/paths';
import Home from './app/Home';
import Movies from './app/Movies';
import MovieDetails from './app/MovieDetails';

function AppRouter() {

    return (
        <>
            <Routes>
                <Route path={paths.home.path} element={<Home />} />
                <Route path={paths.films.root.path} element={<Movies />} />
                <Route path={paths.films.details.path} element={<MovieDetails />} />
            </Routes>
        </>
    )
}

export default AppRouter;