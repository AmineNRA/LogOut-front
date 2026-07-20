import { Routes, Route } from 'react-router-dom';
import { paths } from '../../config/paths';
import Test from './app/test';

function AppRouter() {

    return (
        <>
            <Routes>
                <Route path={paths.home.path} element={<Test />} />
            </Routes>
        </>
    )
}

export default AppRouter;