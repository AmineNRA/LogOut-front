export const paths = {
    home: {
        path: "/",
        getHref: () => "/",
    },
    films: {
        root: {
            path: "/films",
            getHref: () => '/films',
        },
        details: {
            path: "/films/:slug",
            getHref: (name: string) => `/films/${name}`
        }
    },
    games: {
        root: {
            path: "/games",
            getHref: () => "/games",
        },
        details: {
            path: "/games/:gameId",
            getHref: (id: string) => `/games/${id}`
        }
    },
    series: {
        root: {
            path: "/series",
            getHref: () => "/series",
        },
        details: {
            path: "/series/:slug",
            getHref: (id: string) => `/series/${id}`
        }
    },
    auth: {
        root: {
            path: "/connexion",
            getHref: () => "/connexion",
        },
        inscription: {
            path: "/inscription",
            getHref: () => "/inscription"
        }
    }
}