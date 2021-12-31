import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { MovieCard, SelectFilter } from "../core/components";
import { makePrivateRequest } from '../core/utils';
import { theme, colors, select } from '../core/assets/styles';
import { Movie, Review } from "../core/types/Movie";
import UserReview from '../core/components/UserReview';

type Props = {
    reviews?: Review[];
    movieId?: Number;
    onInsert: Function
}

const MovieReviews: React.FC<Props> = ({ reviews }: Props) => {

    const [review, setReview] = useState('');

    return (
        <View style={theme.reviewContainer}>

            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={1}
            />
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={2}
            />
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={3}
            />            

            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={4}
            />
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={5}
            />
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={6}
            />            
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={7}
            />
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={8}
            />
            <UserReview userName="Moises"
                reviewText="filme é d+"
                key={9}
            />            
        </View>
    )
};

export default MovieReviews; 