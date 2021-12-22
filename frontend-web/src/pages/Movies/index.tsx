import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Genre, MoviesResponse } from 'core/types/movie';
import { makePrivateRequest } from 'core/utils/request';
import MovieCard from './components/MovieCard';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import Pagination from 'core/components/Pagination';
import MovieFilters from 'core/components/MovieFilters';

import './styles.scss';


const Movies = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();

    const getMovies = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 4,
            genreId: genre?.id,
            orderBy: 'title',
            direction:'ASC',
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);

            })
    }, [activePage, genre])

    useEffect(() => {
        getMovies();
    }, [getMovies]);


    const handleChangeGenre = (genre: Genre) => {
        setActivePage(0);
        setGenre(genre);
    }

    const clearFilters = () => {
        setActivePage(0);
        setGenre(undefined);
    }

    return (
        <div className="movies-container">

            <div className="filter-container">
                 <MovieFilters
                    genre={genre}
                    handleChangeGenre={handleChangeGenre}
                    clearFilters={clearFilters}
                />
            </div>
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

