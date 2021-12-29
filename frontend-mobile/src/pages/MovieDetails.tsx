import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { api, makePrivateRequest } from '../core/utils';
import { theme, colors, text, nav } from '../core/assets/styles';
import { useNavigation } from '@react-navigation/native';
import { Movie } from "../core/types/Movie";

import arrow from '../core/assets/leftArrow.png'


const MovieDetails = ({ route: { params: { id } }} : any) => {
    
    const navigation = useNavigation();
    const [movie, setMovie] = useState<Movie>();

    const [ loading, setLoading ] = useState(false);
    
    async function  loadMovieData() {

        const res = await makePrivateRequest({ url: `/movies/${id}`})

        setMovie(res.data);
        setLoading(false);
    }

    useEffect(() => {
        loadMovieData();
    }, []);

    return (
        <View style={theme.detailContainer}>
        {
            loading ? 
            <ActivityIndicator size="large" color={colors.white} /> : (
                
                <View style={theme.detailCards}>
                    
                    {/* <TouchableOpacity 
                        style={theme.goBackContainer} 
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={arrow} />
                        <Text style={text.goBackText}>Voltar</Text>
                    </TouchableOpacity> */}
                
                    <View style={theme.movieImageContainer}>
                        <Image 
                            source={{ uri: movie?.imgUrl}}  
                            style={theme.movieImage}
                        />
                    </View>
                    <View style={theme.movieDetails}>
                        <Text style={text.movieDetailsName}>{movie?.title}</Text>
                        <Text style={text.movieYear}>{movie?.year}</Text>
                        <Text style={text.movieSubTitle}>{movie?.subTitle}</Text>
                        
                        <ScrollView style={theme.scrollTextContainer}>
                            <Text style={text.movieDescription}>
                                {movie?.synopsis}
                            </Text>
                        </ScrollView>
                    </View>                        
                </View>
            )
        }
        </View>
    );
}
 
export default MovieDetails;