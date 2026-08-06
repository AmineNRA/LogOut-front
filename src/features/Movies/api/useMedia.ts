import { getMedia } from "./getMedia";
import { searchMedia } from "./searchMedia"
import { useQuery } from '@tanstack/react-query';

type filter = {
    year: null | string,
    rate: string,
    popularity: string,
    genre: null | string

}

export default function useMedia(page: number, filter: filter, searchQuery: string, url: string) {

    const isSearchActive = searchQuery.trim().length >= 3;

    return useQuery({
        queryKey: isSearchActive ?
            ['media', searchQuery]
            : ['medias', filter, page],
        queryFn: () => {
            if (isSearchActive) {
                return searchMedia(searchQuery, url);
            }
            return getMedia(filter, page, url)
        }
    })
}