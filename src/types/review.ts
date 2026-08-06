export type review = {
    author: string,
    author_details: {
        avatar_path: string | null,
        name: string,
        rating: number | null,
        username: string
    }
    ,
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
}