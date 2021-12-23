import { StyleSheet } from 'react-native'
//aaa
const colors = {
    white: "#FFFFFF",
    lightGray: "#9E9E9E",
    mediumGray: "#6C6C6C",
    darkGray: "#263238",
    black: "#000000",
    primary: "#FFC700",
    red: "#DF5753"
}

const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

const nav = StyleSheet.create({
    leftText:{
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 24,
    },
});

export { colors, theme, nav }; 