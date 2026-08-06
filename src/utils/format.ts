export function createSlug(title: string, releaseDate: string, id: number) {
    const cleanTitle = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")

    const year = releaseDate ? releaseDate.slice(0, 4) : ""

    return (`${cleanTitle}-${year}-${id}`)

};

export function formatDate(date: string) {
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    } as const;
    const event = new Date(date);
    const frenchDate = event.toLocaleDateString("fr-FR", options);
    return frenchDate;
}

export function formatRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60
    return `${hours}h${minutes}`
}

export function formatNumberWithSpaces(num: number) {
    const str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}