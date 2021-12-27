import React, { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { MovieCard } from "../components";
import { api, TOKEN, makePrivateRequest } from '../services';
import { theme, colors } from '../styles';


const Movies: React.FC = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fillMovies() {
        setLoading(true);
        //?page=0&linesPerPage=10&direction=ASC&orderBy=title
        
        const params = {
            linesPerPage: 6,
          }

        const res = await makePrivateRequest({ url: '/movies', params})
        const { content } = res.data;
                
        setMovies(content);
        setLoading(false);
    }

    useEffect(() => {
        fillMovies();
    }, [])

    const data = movies;

    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) :
                (data.map((movie) => (
                    <MovieCard {...movie} key={movie.id} />
                )))
            }

        </ScrollView>
    )

};


export default Movies; 