import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'core/types/movie';
import { makePrivateRequest } from 'core/utils/request';
import MovieDescriptionLoader from '../../components/Loaders/MovieCardLoader';
import MovieInfoLoader from '../../components/Loaders/MovieCardLoader';
import MovieReview from '../MovieReviews';
//import MovietDescriptionLoader from '../Loaders/MovieDescriptionLoader';
//import MovieInfoLoader from '../Loaders/MovieInfoLoader';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const [updateReview, setUpdateReview] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId, updateReview]);

    const onInsert = () => {
        console.log(">>> chamou o update")
        setUpdateReview(updateReview + 1);
    }

    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-10 movie-details">
                <div className="movie-details-info">
                        {isLoading ? <MovieInfoLoader /> : (
                            <>
                                <div className="movie-details-card">
                                    <img 
                                        src={movie?.imgUrl} 
                                        alt={movie?.title} 
                                        className="movie-details-image"
                                    />
                                </div>
                            </>
                        )}                    
                    <div className="movie-details-card">
                        {isLoading ? <MovieDescriptionLoader /> : (
                            <>
                               <div className="movie-info-fields">
                                    <h1 className="movie-details-title">
                                        {movie?.title}
                                    </h1>
                                </div>

                                <h1 className="movie-description-year">
                                    {movie?.year}
                                </h1>
                                
                                <h1 className="movie-description-subtitle">
                                    {movie?.subTitle}
                                </h1>
                                <p className="movie-description-text">
                                    {movie?.synopsis}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <>
              <MovieReview reviews={movie?.reviews} movieId={movie?.id} onInsert={onInsert}/>  
            </>
        </div>
    );

};


export default MovieDetails;
