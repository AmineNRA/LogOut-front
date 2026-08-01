export const getReviews = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=us-US&page=1`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_FILM_KEY}`,
        }
    })
    const data = await response.json();
    return data;
}