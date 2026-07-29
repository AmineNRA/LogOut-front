import { getMovies } from "./getMovies";
import { searchMovie } from "./searchMovie"
import { useQuery } from '@tanstack/react-query';

type filter = {
    year: null | string,
    rate: string,
    popularity: string,
    genre: null | string

}

export default function useMovie(page: number, filter: filter, searchQuery: string) {

    const isSearchActive = searchQuery.trim().length >= 3;

    return useQuery({
        queryKey: isSearchActive ?
            ['movie', searchQuery]
            : ['movies', filter, page],
        queryFn: () => {
            if (isSearchActive) {
                return searchMovie(searchQuery);
            }
            return getMovies(filter, page)
        }
    })
}