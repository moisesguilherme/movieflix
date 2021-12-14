import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Movie, MoviesResponse } from 'core/types/movie';
import MovieCard from './components/MovieCard';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import { makePrivateRequest } from 'core/utils/request';
import Pagination from 'core/components/Pagination';

import './styles.scss';

type Props = {
    text: string;
}

const Movies = ({ text }: Props) => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const getMovies = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 4,
            orderBy: 'id'
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);

            })
    }, [activePage])

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <div className="movies-container">
            <div className="movies-card-container">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                )}
            </div>

            {moviesResponse && (
                    <Pagination
                        totalPages={moviesResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />
                )}

        </div>
    )
}

export default Movies;

