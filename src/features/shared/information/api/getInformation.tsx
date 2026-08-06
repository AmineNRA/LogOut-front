export const getInformations = async (id: number, url: string) => {
    let fetchUrl: string
    if (url.includes("/films")) {
        fetchUrl = `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`
    } else {
        fetchUrl = `https://api.themoviedb.org/3/tv/${id}?language=fr-FR`
    }
    const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_FILM_KEY}`
        }
    })
    const data = await response.json();
    return data;
}