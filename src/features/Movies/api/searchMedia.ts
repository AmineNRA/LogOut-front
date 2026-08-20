export const searchMedia = async (search: string, mediaType: string) => {
    let fetchUrl: string;

    if (mediaType === 'movie') {
        fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=fr-FR&page=1`;
    }
    else {
        fetchUrl = `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=fr-FR&page=1`
    }

    const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application.json",
            Authorization: `Bearer ${import.meta.env.VITE_API_FILM_KEY}`,
        }
    }
    )
    const data = await response.json();
    return data;
}