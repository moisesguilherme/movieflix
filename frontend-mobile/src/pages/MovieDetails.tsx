import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, Image, ScrollView } from 'react-native';
import { api, makePrivateRequest } from '../services';
import { theme, colors, text } from '../styles';
import { useNavigation } from '@react-navigation/native';


import arrow from '../assets/leftArrow.png'


const MovieDetails = ({ route: { params: { id } }} : any) => {
    
    const navigation = useNavigation();
    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null, 
        imgUrl: null,
        synopsis: null,
        genreId: null,
        reviews: [],
    });

    const [ loading, setLoading ] = useState(false);

    async function  loadMovieData() {

        const res = await makePrivateRequest({ url: `/movies/${id}`})
        //const { content } = res.data;
        //const res = await api.get(`movies/${id}`);

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
            <ActivityIndicator size="large" color={colors.primary} /> : (
                <View style={theme.detailCards }>
                    <TouchableOpacity 
                        style={theme.goBackContainer} 
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={arrow} />
                        <Text style={text.goBackText}>Voltar</Text>
                    </TouchableOpacity>
                    <View style={theme.movieImageContainer}>
                        <Image 
                            source={{ uri: movie.imgUrl}}  
                            style={theme.movieImage}
                        />
                    </View>
                    <Text style={text.movieDetailsName}>{movie.title}</Text>
                    <Text style={text.movieYear}>{movie.year}</Text>
                    
                    <ScrollView style={theme.scrollTextContainer}>
                        <Text style={text.movieDescription}>
                            {movie.synopsis}
                        </Text>
                    </ScrollView>
                </View>
            )
        }
        </View>
    );
}

export default MovieDetails;