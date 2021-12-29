import React from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { text, theme } from '../assets/styles';
import { Movie } from '../types/Movie'

const MovieCard: React.FC<Movie> = ( {id, title, subTitle, year, imgUrl, synopsis, genreId, reviews}) => {
    const navigation = useNavigation();
    
    return (
    <TouchableOpacity style={theme.movieCard} onPress={() => navigation.navigate('MovieDetails', {id})}>
        <Image source={{ uri: imgUrl}} style={theme.movieImg}/>
        <View style={theme.movieDescription}>
            <Text style={text.movieTitle}>{title}</Text>
            <Text style={text.movieYear}>{year}</Text>
            <Text style={text.movieSubTitle}>{subTitle}</Text>
        </View>    
    </TouchableOpacity>
    );
};

export default MovieCard;