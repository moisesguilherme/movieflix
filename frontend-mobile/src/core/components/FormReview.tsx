import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
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
        <View style={[box.VBox, margin.padding, {width: '100%'}]}>
            <View style={[margin.bottom10]}>
                <TextInput
                    style={[text.reviewInput, box.input, margin.bottom10]}
                    placeholder="Deixe sua avaliação aqui"
                    autoCapitalize="none"
                    textAlignVertical='top'
                    keyboardType="default"
                    multiline={true}
                    scrollEnabled={true}
                    value={review}
                    onChangeText={reviewText => setReview(reviewText)}
                />

            </View>
            <TouchableOpacity
                style={[theme.primaryButton, {width: '100%'}, margin.bottom10]}
                onPress={ () => saveReview()}            
            >
                <View>
                    <Text style={text.primaryText}>SALVAR AVALIAÇÃO</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default FormReview;