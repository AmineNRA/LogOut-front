// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&primary_release_date.lte=2026-07-22&sort_by=primary_release_date.desc&vote_count.gte=300

const dateOfTheDay = new Date().toLocaleDateString('en-CA')

const decade = (releaseDate: string) => {
    const [year, month, day] = releaseDate.split('-');
    return `${Number(year) + 10}-${month}-${day}`
}

type filter = {
    year: null | string,
    rate: string,
    popularity: string,
    genre: null | string
}

export const getMedia = async (filter: filter, page: number, url: string) => {
    let fetchUrl: string;

    if (url === '/films') {
        fetchUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}${filter.year ? `&primary_release_date.gte=${filter.year}&primary_release_date.lte=${decade(filter.year)}` : `&primary_release_date.lte=${dateOfTheDay}`}&sort_by=${filter.popularity}&vote_average.gte=${filter.rate}&vote_count.gte=400${filter.genre ? `&with_genres=${filter.genre}` : ''}`
    }
    else {
        fetchUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=fr-FR&page=${page}${filter.year ? `&air_date.gte=${filter.year}&air_date.lte=${decade(filter.year)}` : `&air_date.lte=${dateOfTheDay}`}&sort_by=${filter.popularity}&vote_average.gte=${filter.rate}&vote_count.gte=400${filter.genre ? `&with_genres=${filter.genre}` : ''}`
    }

    const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_FILM_KEY}`,
        }
    })
    const data = await response.json();
    return data;
}