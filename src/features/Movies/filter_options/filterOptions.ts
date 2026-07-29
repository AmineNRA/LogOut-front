import { type Filter } from '@/types/filter';

export const filterOptions: Filter = [
    {
        name: "year",
        placeholder: "Année",
        options: [
            { value: "2020-01-01", label: "2020" },
            { value: "2010-01-01", label: "2010" },
            { value: "2000-01-01", label: "2000" },
            { value: "1990-01-01", label: "1990" },
            { value: "1980-01-01", label: "1980" },
        ]
    },
    {
        name: "rate",
        placeholder: "Note",
        options: [
            { value: "10", label: "5 étoiles" },
            { value: "8", label: "4 étoiles" },
            { value: "6", label: "3 étoiles" },
            { value: "4", label: "2 étoiles" },
            { value: "2", label: "1 étoiles" },
        ]
    },
    {
        name: "popularity",
        placeholder: "Popularité",
        options: [
            { value: "popularity.desc", label: "Les plus populaires" },
            { value: "popularity.asc", label: "Les moins populaires" },
        ]
    },
    {
        name: "genre",
        placeholder: "Genre",
        options: [
            { value: 28, label: "Action" },
            { value: 12, label: "Aventure" },
            { value: 16, label: "Animation" },
            { value: 35, label: "Comédie" },
            { value: 80, label: "Crime" },
            { value: 99, label: "Documentaire" },
            { value: 18, label: "Drame" },
            { value: 10751, label: "Familial" },
            { value: 14, label: "Fantastique" },
            { value: 36, label: "Histoire" },
            { value: 27, label: "Horeur" },
            { value: 10402, label: "Musique" },
            { value: 9648, label: "Mystère" },
            { value: 10749, label: "Romance" },
            { value: 878, label: "Science-Fiction" },
            { value: 10770, label: "Téléfilm" },
            { value: 53, label: "Thriller" },
            { value: 10752, label: "Guerre" },
            { value: 37, label: "Western" }
        ]
    },
]