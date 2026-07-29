import { Routes, Route } from 'react-router-dom';
import { paths } from '../../config/paths';
import Home from './app/home';
import Movies from './app/movies';

function AppRouter() {

    return (
        <>
            <Routes>
                <Route path={paths.home.path} element={<Home />} />
                <Route path={paths.films.root.path} element={<Movies />} />
            </Routes>
        </>
    )
}

export default AppRouter;