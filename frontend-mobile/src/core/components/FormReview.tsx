import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme, box, margin } from '../assets/styles';

type Props = {
    userName?: String;
    reviewText?: String    
}

const FormReview: React.FC<Props> = ( {userName, reviewText} : Props ) => {
    
    return (
    <View style={[box.VBox, margin.padding]}>
            <View style={margin.bottom10}>            
                <TextInput style={[text.reviewInput, box.input]}
                            placeholder="Deixe sua avaliação aqui"
                            autoCapitalize="none"
                            keyboardType="default"
                        /> 

                </View>
            <TouchableOpacity style={[theme.primaryButton]}>
                    <View style={theme.buttonTextContainer}>
                        <Text style={text.primaryText}>SALVAR AVALIAÇÃO</Text>
                    </View>
            </TouchableOpacity>
    </View>
    );
};

export default FormReview;