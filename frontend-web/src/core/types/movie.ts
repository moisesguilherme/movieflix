export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: string;
    imgUrl: string;
    synopsis: string;
    genres: Genre[];
    reviews: Review[];
}

export type Genre = {
    id: number;
    name: string;   
}

export type Review = {
    id: number;
    text: string;   
}