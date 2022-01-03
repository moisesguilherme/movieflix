import React, { useState, useEffect } from 'react'
import { View, Modal, TouchableOpacity, ScrollView, Text, Image } from 'react-native';
import { select } from '../assets/styles';
import { makePrivateRequest } from '../../core/utils/request';
import { Genre } from '../types/Movie'
import ArrowDownIcon from '../../core/assets/arrowDown.png';

type Props = {
    handleChangeGenre: (index: number) => void;
}

const SelectFilter: React.FC<Props> = ({ handleChangeGenre }: Props) => {
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [showGenres, setShowGenres] = useState(false)
    const [activeGenre, setActiveGenre] = useState('Todos');

    const [first, setFirst] = useState(false);

    useEffect(() => {
        
        if(isLoadingGenres) return;
        //Chama os generos apenas uma vez. 
        makePrivateRequest({ url: '/genres' })
            .then(response => {
                const data: Genre[] = response.data;
                data.unshift({ id: 0, name: "Todos" });
                setGenres(response.data)
                
            })
            .finally(() => setIsLoadingGenres(true));
    }, []);


    return (

        <View>
            <Modal
                visible={showGenres}
                animationType="fade"
                transparent={true}
                presentationStyle="overFullScreen"

            >
                {isLoadingGenres && (
                    <View style={select.modalContainer}>
                        <ScrollView contentContainerStyle={select.modalContent}>
                            {genres?.map(genre => (
                                
                            (genre.name !== activeGenre) &&  (
                                <TouchableOpacity
                                    style={select.modalItem}
                                    key={genre.id}
                                    onPress={() => {
                                        setShowGenres(!showGenres)
                                        handleChangeGenre(genre.id)
                                        setActiveGenre(genre.name)
                                    }}
                                >
                                            <Text style={select.modalItemText}>
                                                {genre.name}
                                            </Text>

                                </TouchableOpacity>)
                            ))}
                        </ScrollView>
                    </View>
                )
                }
            </Modal >

            <View style={select.filterContainer}>
                <TouchableOpacity
                    onPress={() => setShowGenres(!showGenres)}
                    style={select.filterSelectContainer}
                    activeOpacity={0.2}
                >
                    <Text style={select.filterSelectText}>
                        {activeGenre}
                    </Text>
                    <Image style={select.pickerIcon} source={ArrowDownIcon}></Image>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default SelectFilter;