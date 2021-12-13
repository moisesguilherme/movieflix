import React from 'react';
import { Movie } from 'core/types/movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => (
    <div className="card-base border-radius-10 movie-card">
        <img src={movie.imgUrl} alt={movie.title} className="movie-card-image"/>
        <div className="movie-info">
            <h6 className="movie-title">
                {movie.title}
            </h6>
            <h6 className="movie-year">
                {movie.year}
            </h6>
            <h6 className="movie-year">
                {movie.synopsis}
            </h6>
        </div>
    </div>
);

export default MovieCard;
