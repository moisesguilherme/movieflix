import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Movie, MoviesResponse } from 'core/types/movie';
import MovieCard from './components/MovieCard';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import { makePrivateRequest } from 'core/utils/request';

import './styles.scss';

type Props = {
    text: string;
}

const Movies = ( {text } : Props) => {
    
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    
    const getMovies = useCallback(() => {
        const params = {
            page: 0, 
            linesPerPage: 4,
            orderBy: 'id'
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params})
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
                
            })
    }, [])
    
    useEffect(() => {
        getMovies();
    }, [getMovies]);
    
    return (
        <>
                 <div className="movies-container">
                    {isLoading ? <MovieCardLoader/> : (
                        moviesResponse?.content.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <MovieCard movie={movie}/>
                            </Link>
                        ))
                    )}
                </div> 
        </>
    )
}

export default Movies;

