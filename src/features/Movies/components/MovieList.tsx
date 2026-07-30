import FilterBar from '@/components/ui/filterBar/FilterBar';
import { filterOptions } from '../filter_options/filterOptions';
import { useState } from 'react';
import { type movie } from '@/types/movie';
import SearchBar from '@/components/ui/searchBar/searchBar';
import useMovie from '../api/useMovie';
import Loading from '@/components/ui/loading/Loading';
import CustomPagination from '@/components/ui/pagination/CustomPagination';
import { Link } from "react-router-dom";
import { createSlug } from '@/utils/format';

export default function PopularMovieList() {


    const [filter, setFilter] = useState({
        year: null,
        rate: "0",
        popularity: "popularity.desc",
        genre: null,
    })

    const [page, setPage] = useState(1)

    const [querySearch, setQuerySearch] = useState("");

    const changeFilter = (name: string, value: string | number) => {
        if (Object.hasOwn(filter, name)) setFilter({ ...filter, [name]: value })
    }

    const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const { data: movies, isLoading, error } = useMovie(page, filter, querySearch)

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
                <FilterBar filterOptions={filterOptions} handleChange={changeFilter} />
                <SearchBar setQuerySearch={setQuerySearch} />
            </div>
            <section>
                {isLoading ?
                    <Loading />
                    :
                    <>
                        <div className="grid grid-flow-row grid-cols-5 gap-12 mt-4 justify-center">
                            {movies.results.map((movie: movie) => (
                                movie.poster_path &&
                                <Link to={`/films/${createSlug(movie.title, movie.release_date, movie.id)}`} state={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} key={movie.id} className="shadow-xl border-1 border-app-border rounded-lg hover:outline hover:outline-4 hover:outline-blue-500 hover:[outline-offset:-4px] cursor-pointer" />
                                </Link>

                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            {querySearch.length === 0 && <CustomPagination totalPages={movies.total_pages} page={page} handleChange={handleChangePage} />}
                        </div>
                    </>
                }
            </section>

            {error ? (
                <div> Une erreur est survenue </div>
            ) :
                ""}
        </div>
    )
}