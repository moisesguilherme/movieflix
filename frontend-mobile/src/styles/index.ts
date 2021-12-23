import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
//aaa
const colors = {
    white: "#FFFFFF",
    lightGray: "#9E9E9E",
    mediumGray: "#6C6C6C",
    darkGray: "#263238",
    black: "#000000",
    primary: "#FFC700",
    red: "#DF5753",
    background: "#525252",
}


const text = StyleSheet.create({
    regular: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: colors.mediumGray,
    },
    bold: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: colors.darkGray,
    },
    primaryText: {
        fontSize: 20,
        textTransform: "uppercase",
        color: colors.black,
        textAlign: "center",
        fontWeight: "bold"
    },
    movieName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    currency: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },
    moviePrice: {
        fontSize: 30,
        color: colors.primary,
        fontWeight: "bold",
    },
    goBackText: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.darkGray,
        marginLeft: 16,       
    },
    movieDetailsName: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        color: colors.darkGray,
    },
    movieDescription: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },
    loginTitle: {
        fontSize: 36,
        color: colors.white,
        textTransform: "uppercase",
        marginBottom: 50, 
    }
})


const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    // LoginPage
    loginCard: {
        width: "95%",
        height: "95%",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: colors.mediumGray,
        elevation: 4,
        borderRadius: 4, 
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        marginVertical: 10,
    },
    textInput : {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },
    passwordGroup:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },
    eyes:{
        left: 0,
    },
    primaryButton: {
        width: 290,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTextContainer: {
        

    },
    toggle:{
        margin: 0,
    }
});

const nav = StyleSheet.create({
    leftText:{
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 24,
    },
});

export { colors, theme, text, nav }; 