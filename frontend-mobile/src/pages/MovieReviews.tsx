import React from 'react'
import { View } from 'react-native'
import { theme} from '../core/assets/styles';
import { Review } from "../core/types/Movie";
import UserReview from '../core/components/UserReview';

type Props = {
    reviews?: Review[];
    movieId?: Number;
    onInsert: Function
}

const MovieReviews: React.FC<Props> = ({ reviews }: Props) => {

    return (
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
    )
};

export default MovieReviews; 