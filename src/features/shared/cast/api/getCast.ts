// export const getCast = async (id: number) => {

//     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=fr-FR`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${import.meta.env.VITE_API_FILM_KEY}`,
//         }
//     })
//     const data = await response.json();
//     return data;
// }

export default async function getCast(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=fr-FR`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_FILM_KEY}`,
        }
    })
    const data = await response.json();
    return data;
}