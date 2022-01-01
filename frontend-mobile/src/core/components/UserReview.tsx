import React from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { text, theme, box, margin } from '../assets/styles';
import { Review } from '../types/Movie'
import starIcon from '../assets/starIcon.png'

type Props = {
    userName?: String;
    reviewText?: String    
}

const UserReview: React.FC<Props> = ( {userName, reviewText} : Props ) => {
    const navigation = useNavigation();
    
    return (
    <View style={[box.VBox, box.padding]}>
        <View style={[box.HBox, margin.bottom10]}>
            <Image source={starIcon} style={theme.reviewImg}/>
            <Text style={text.reviewUser}>{userName}</Text>
        </View>
        <View style={[box.border, margin.top5]}>
            <Text style={text.reviewText}>{reviewText}</Text>
        </View>    
    </View>
    );
};

export default UserReview;