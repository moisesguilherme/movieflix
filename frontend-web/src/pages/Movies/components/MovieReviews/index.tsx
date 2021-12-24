import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Review } from 'core/types/movie';
import { getAccessTokenDecoded } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import UserReview from 'core/components/UserReview';
import './styles.scss';


type Props = {
    reviews?: Review[];
    movieId?: Number;
    onInsert: Function
}

const MovieReview = ({
    reviews,
    movieId,
    onInsert
}: Props) => {
    const [review, setReview] = useState('');
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        const currentUser = getAccessTokenDecoded()
        setHasPermission(currentUser.authorities.toString() === 'ROLE_MEMBER')
    
      }, [])

    const handleChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(event.target.value)
    } 
    
    const onSubmit = (event:  React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const payload = {
            movieId,
            text:review
        }
        

        makePrivateRequest({
                url: `/reviews`,
                method:'POST', 
                data: payload,
            })
            .then(() => {
                toast.success("Avaliação do filme foi salvo com sucesso!", {delay:400});
                onInsert();
                
            })
            .catch(() => {
                toast.error('Erro ao salvar a avaliação!');
            })
    }


    return (
        <div className="reviews-container">

             {hasPermission && (
                <div className="card-base border-radius-4 input-search">
                        <textarea
                            className="text-field"
                            value={review}
                            placeholder="Deixe sua avaliação aqui"
                            onChange={ handleChangeReview }
                        />
                        
                        <button 
                            className={`review-submit review-submit-text ${review.length <= 5 ? 'disabled' : ''} `}
                            disabled={review.length <= 5}
                            onClick={(e) => onSubmit(e)}                        
                        >
                            SALVAR AVALIAÇÃO
                        </button>
                </div>
            ) 
            }
            
            {(reviews?.length !== 0) &&
                <div className="card-base border-radius-4 review-user-container">
                    {reviews?.map(review => (
                        <UserReview userName={review.user.name}
                            reviewText={review.text}
                            key={review.id}
                        />
                    )).reverse()
                    }
                </div>
            }
        </div>
    )
}

export default MovieReview;
