import React, { useEffect, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Review, Movie } from 'core/types/movie';
import { makePrivateRequest } from 'core/utils/request';
import './styles.scss';
import UserReview from 'core/components/UserReview';

type Props = {
    reviews?: Review[];
}

const MovieReview = ({
    reviews,
    //handleChangeText
}: Props) => {
    const [isLoadingReviews, setIsLoadingReviews] = useState(false);
    //const [review, setReview] = useState<Review[]>();

    useEffect(() => {
        /*setIsLoadingReviews(true);
        makePrivateRequest({ url:  `/reviews?movieId=${movieId}`})
            .then(response => {
                setReview(response.data);
                console.log(movieId)
                console.log(response.data);
            
            })
            .finally(() => setIsLoadingReviews(false));*/
            console.log(reviews);
    }, [reviews]);

    return (
        <div className="reviews-container">
            <div className="card-base border-radius-4 input-search">
                <input
                    type="text"
                    //value={text}
                    className="form-control"
                    placeholder="Deixe sua avaliação aqui"
                //onChange={event => handleChangeText(event.target.value)}
                />
                <button className="review-submit review-submit-text" >
                    SALVAR AVALIAÇÃO
                </button>
            </div>

            <div className="card-base border-radius-4 review-user-container">
                {reviews?.map(review => (
                        <UserReview userName={review.user.name} 
                                    reviewText={review.text} 
                                    key={review.id}
                                    />        
                    ))
                }   
            </div>

        </div>

    )
}

export default MovieReview;
