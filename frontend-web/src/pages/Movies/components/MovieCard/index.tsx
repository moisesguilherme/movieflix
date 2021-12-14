import React from 'react';
import { Movie } from 'core/types/movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => (
    <div className="movie-card">
        <img src={movie.imgUrl} alt={movie.title} className="movie-image"/>
        <div className="movie-info">
            <h6 className="movie-title">
                {movie.title}
            </h6>
            <h6 className="movie-year">
                {movie.year}
            </h6>
            <h6 className="movie-subtitle">
                {movie.subTitle}
            </h6>
        </div>
    </div>
);

export default MovieCard;
