import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { theme, box } from '../core/assets/styles';
import { Review } from "../core/types/Movie";
import UserReview from '../core/components/UserReview';
import { FormReview } from '../core/components';
import { getAccessTokenDecoded, isAllowedByRole,  } from '../core/utils/auth';

type Props = {
    reviews?: Review[];
    movieId?: Number;
    onInsert: Function
}

const MovieReviews: React.FC<Props> = ({ reviews, movieId, onInsert }: Props) => {
    
    const [hasPermission, setHasPermission] = useState(false);
    
    async function verifyIfUserIsMember() {
        const user = await isAllowedByRole('ROLE_MEMBER')
        setHasPermission(user)
    }

    useEffect(() => {
        verifyIfUserIsMember();
      }, [])
     
    
    return (
        <>
            
           {hasPermission && (            
            <View style={[theme.baseContainer, box.alignCenter]}>
                <FormReview movieId={Number(movieId)} onInsert={onInsert} />
            </View>
           )}

            <View style={theme.baseContainer}>

                {(reviews?.length !== 0) &&
                    <>
                        {reviews?.map(review => (
                            <UserReview userName={review.user.name}
                                reviewText={review.text}
                                key={review.id}
                            />
                        )).reverse()
                        }
                    </>
                }
            </View>
        </>
    )
};

export default MovieReviews; 