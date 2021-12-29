import { StyleSheet } from 'react-native'
import { block, color } from 'react-native-reanimated';
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
        color: colors.white,
        marginLeft: 16,       
    },
    movieDetailsName: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 0,
        color: colors.white,
    },
    movieDescription: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.lightGray,
        textAlign: "justify",
        lineHeight: 21,
    },
    loginTitle: {
        fontSize: 36,
        color: colors.white,
        textTransform: "uppercase",
        marginBottom: 50, 
    },
    logoutText: {
        color: colors.black,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: colors.white,
    },
    movieYear: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: "bold",
    },
    movieSubTitle: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.white,
    },
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
        //elevation: 4,
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
        zIndex: -10,
    },
    eyesIcon:{
        width: 25,
        height: 25,
    },
    toggle:{
        margin: -35,
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
    movieCard: {
        width: 380,
        backgroundColor: colors.mediumGray,
        borderRadius: 4,
        //elevation: 4, 
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    movieImg: {
        width: "100%",
        height: 165,
        marginTop: 26,
        marginRight: 0,
        marginLeft: 0,
    },
    movieDescription:{
        width: "100%",
        padding: 20,
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,
    },
    scrollContainer: {
        backgroundColor: colors.background,
        padding: 10,
    },
    detailCards: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.mediumGray,
        //elevation: 4,
        borderRadius: 10, 
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "flex-start",
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
    detailContainer: {
        backgroundColor: colors.background,
        paddingTop: 20,
        paddingBottom: 20,                
        paddingLeft: 5,
        paddingRight:5,
    },
    goBackContainer: {
        width: 290,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 10,
    },
    movieImageContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    movieImage: {
        width: "100%",
        height: 163,
    },
    scrollTextContainer:{
        marginVertical: 20,
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E1E1E1",
    },    
    movieDetails:{
        marginTop: 10,
    },
});

const nav = StyleSheet.create({
    leftText:{
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 24,
    },
    logoutBtn: {
        width: 100,
        height: 30,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },    
});

const select =  StyleSheet.create({
    container: {
        width: 380,
        backgroundColor: colors.mediumGray,
        borderRadius: 4,
        //elevation: 4, 
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        margin: 10,
        padding: 8,
    },
    text:{
        height: 20, 
        width: 170,
        fontSize: 10,
        color: colors.white,
    },
    item:{
        backgroundColor: colors.mediumGray, 
        color: colors.white, 
        fontFamily:"Open Sans", 
        fontSize:17,
    },
    pickerWrapper: {
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 4,
     },
     pickerIcon: {
        position: "absolute",
        bottom: 22,
        right: 17,
        elevation: 5,
     },
     pickerContent: {
        margin: 3,
        color: colors.white,
        width: 250,
        fontSize: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
     },
});

export { colors, theme, text, nav, select }; 