export const searchMovie = async (search: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=fr-FR&page=1`, {
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