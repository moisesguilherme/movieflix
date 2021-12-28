import React, { useState, useEffect } from 'react'
import { ScrollView, View, ActivityIndicator, FlatList } from 'react-native'
import { MovieCard } from "../core/components";
import { api, TOKEN, makePrivateRequest } from '../core/utils';
import { theme, colors } from '../core/assets/styles';
import { Genre, Movie } from "../core/types/Movie";


const Movies: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>()
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [genre, setGenre] = useState<Genre>()

    useEffect(() => {
        fillMovies();
    }, [])


    const fillMovies = async () => {
        //?page=0&linesPerPage=10&direction=ASC&orderBy=title

        const params = {
            linesPerPage: 6,
            page,
            genreId: genre?.id
        }

        const response = await makePrivateRequest({ url: '/movies', params })
        const { content } = response.data;

        if (!response)
            setIsLoading(true)

        if (page > 0) {
            setMovies(previousData => [...previousData, ...content])
        } else {
            setMovies(content)
        }

        setIsLoading(false)
        setIsLoadingMore(false)
    }

    
    //Infinity scroll
    const loadMore = (distance: number) => {
        if (distance < 1)
            return

        setIsLoadingMore(true)
        setPage(previousPage => previousPage++)
        fillMovies()
    }


    return (
        <View style={ theme.container}>
            {isLoading ? (
                <ActivityIndicator size='large' color={colors.white}/>
            ) : (
                <FlatList
                    data={movies}
                    keyExtractor={movie => String(movie.id)}
                    renderItem={({ item }) => (
                        <MovieCard
                            {...item}
                            key={item.id} />
                    )}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => loadMore(distanceFromEnd)}
                    ListFooterComponent={isLoadingMore ? <ActivityIndicator style={{ marginBottom: 20 }} color={colors.yellow} /> : <></>}
                />
            )
            }
        </View>
        )
};

export default Movies; 