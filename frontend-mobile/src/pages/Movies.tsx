import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { MovieCard, SelectFilter } from "../core/components";
import { makePrivateRequest } from '../core/utils';
import { theme, colors, select  } from '../core/assets/styles';
import { Movie } from "../core/types/Movie";
import GenericTouchable from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';


const Movies: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>()
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [genreId, setGenreId] = useState()
    const [update, setUpdate] = useState(0);
    
    useEffect(() => {
        fillMovies();
    }, [update])

    const flatListRef = React.useRef()

    const fillMovies = async () => {
        const params = {
            linesPerPage: 5,
            direction: 'ASC',
            orderBy: 'title',
            page,
            genreId, 
        }

        //console.warn("page: ", page, "genredId", genreId)
        const response = await makePrivateRequest({ url: '/movies', params })
            .then(response => {
                const { content } = response.data;

                if (page > 0) {
                    setMovies(previousData => [...previousData, ...content])
                } else {
                    setMovies(content)
                }                

            })
            .finally(() => {
                setIsLoading(false)
                setIsLoadingMore(false)
            });
    }

    //Infinity scroll
    const loadMore = (distance: Number) => {
        
        if(distance == 0 || distance >= 1){
            setIsLoadingMore(true)
            setPage(previousPage => previousPage+1)
            setUpdate(update+1);
        }
    }

    const handleChangeGenre = (index: Number) => {
        setPage(0);
        setGenreId(index);
        setUpdate(update+1);
        toTop();
    }
    
    const toTop = () => {
        // use current
        flatListRef.current.scrollToOffset({ animated: false, offset: 0 })
    }

    return (
        <View style={theme.container}>
            {isLoading ? (
                <ActivityIndicator size='large' color={colors.white} />
            ) : (
              <>
                <View style={select.container}>
                    <SelectFilter
                        handleChangeGenre={handleChangeGenre}
                    />
                </View>
                <FlatList
                    ref={flatListRef}
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
                    ListFooterComponent={isLoadingMore ? <ActivityIndicator style={{ marginBottom: 20 }} color={colors.white} /> : <></>}
                />
                </>  
            )
            }
        </View>
    )
};

export default Movies; 