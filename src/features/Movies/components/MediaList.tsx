import FilterBar from '@/components/ui/filterBar/FilterBar';
import { filterOptions } from '../filter_options/filterOptions';
import { useState } from 'react';
import { type media } from '@/types/media';
import SearchBar from '@/components/ui/searchBar/searchBar';
import useMedia from '../api/useMedia';
import Loading from '@/components/ui/loading/Loading';
import CustomPagination from '@/components/ui/pagination/CustomPagination';
import { Link, useLocation } from "react-router-dom";
import { createSlug } from '@/utils/format';

export default function MediaList() {

    const location = useLocation();

    const url = location.pathname;

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

    const { data: medias, isLoading, error } = useMedia(page, filter, querySearch, url)



    console.log(medias)

    const changeLink = (media: media) => {
        if (Object.hasOwnProperty.call(media, "title")) {
            return `/films/${createSlug(media.title, media.release_date, media.id)}`
        } else {
            return `/series/${createSlug(media.name, media.first_air_date, media.id)}`
        }
    }

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
                            {medias.results.map((media: media) => (
                                media.poster_path &&
                                <Link to={changeLink(media)} state={media.id} key={media.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200${media.poster_path}`} alt={media.title} className="shadow-xl border-1 border-app-border rounded-lg hover:outline hover:outline-4 hover:outline-blue-500 hover:[outline-offset:-4px] cursor-pointer" />
                                </Link>

                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            {querySearch.length === 0 && <CustomPagination totalPages={medias.total_pages} page={page} handleChange={handleChangePage} />}
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