export const getReviews = async (id: number, url: string) => {
    let fetchUrl: string
    if (url.includes("/films")) {
        fetchUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?language=us-US&page=1`
    } else {
        fetchUrl = `https://api.themoviedb.org/3/tv/${id}/reviews?language=us-US&page=1`
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