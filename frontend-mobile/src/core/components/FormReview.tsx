import React, { useEffect, useState } from 'react';
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme, box, margin } from '../assets/styles';
import { makePrivateRequest } from '../utils/request';

type Props = {
    movieId: Number,
    onInsert: Function
}

const FormReview: React.FC<Props> = ({ movieId, onInsert }: Props) => {

    const [review, setReview] = useState('');

    async function saveReview() {
        try {
          const payload = {
            movieId,
            text: review
          }
      
          await makePrivateRequest({
            url: '/reviews',
            method: 'POST',
            data: payload
          })
      
          Alert.alert('', 'Avaliação do filme foi salvo com sucesso!', [
            { text: 'OK', style: 'cancel' }
          ])
      
          setReview('')
          onInsert();
        }
        catch (e) {
          Alert.alert('Ocorreu um erro', 'O campo não pode estar vazio!', [
            { text: 'OK', style: 'cancel' }
          ])
        }
      }


    return (
        <View style={[box.VBox, margin.padding]}>
            <View style={margin.bottom10}>
                <TextInput
                    style={[text.reviewInput, box.input]}
                    placeholder="Deixe sua avaliação aqui"
                    autoCapitalize="none"
                    textAlignVertical='top'
                    keyboardType="default"
                    multiline={true}
                    scrollEnabled={true}
                    onChangeText={reviewText => setReview(reviewText)}
                />

            </View>
            <TouchableOpacity
                style={[theme.primaryButton]}
                onPress={ () => saveReview()}            
            >
                <View style={theme.buttonTextContainer}>
                    <Text style={text.primaryText}>SALVAR AVALIAÇÃO</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default FormReview;