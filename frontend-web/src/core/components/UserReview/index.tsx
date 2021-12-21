import React, { useEffect, useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { Review } from 'core/types/movie';
import { ReactComponent as StarIcon } from 'core/assets/images/star.svg';
import './styles.scss'

type Props = {
    userName?: String;
    reviewText?: String    
}

const UserReview = ({userName, reviewText} : Props) => {
    return (
        <div className="review-container">
            <div className="review-user">
                 <StarIcon /> <div className="name">{userName}</div> 
            </div>
            <div className="movie-review-text">
                {reviewText}
            </div>
        </div>
    )
}

export default UserReview;