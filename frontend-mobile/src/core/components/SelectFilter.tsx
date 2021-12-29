import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { nav, select } from '../assets/styles';
import { makePrivateRequest } from '../../core/utils';
import { Genre } from '../types/Movie'
import ArrowDownIcon from '../../core/assets/arrowDown.png';

type Props = {
    handleChangeGenre: (index: number) => void;
}

const SelectFilter:React.FC<Props> = ({
    handleChangeGenre,
}: Props) => {
    const [selectedValue, setSelectedValue] = useState('Nenhum');
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres' })
            .then(response => {
                const data: Genre[] = response.data;
                data.unshift({ id: 0, name: "Todos" });
                setGenres(response.data)
                //setSelectedValue(response.data)
            })
            .finally(() => setIsLoadingGenres(true)
            );
    }, [genres]);


    
    return (

        <View style={select.pickerWrapper}>
            {isLoadingGenres && (
                <>
                    <Image style={select.pickerIcon} source={ArrowDownIcon}></Image> 
                    <Picker
                        style={select.pickerContent}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemPosition) => {
                            setSelectedValue(itemValue);
                            handleChangeGenre(itemPosition)
                        }}
                    >
                        {
                            genres.map(item => (<Picker.Item style={select.item} label={item.name} value={item.name} />))
                        }

                    </Picker>
                </>
            )
            }
        </View>
    );
};

export default SelectFilter;