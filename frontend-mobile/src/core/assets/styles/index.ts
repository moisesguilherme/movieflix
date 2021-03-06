import { StyleSheet } from 'react-native'
import { block, color } from 'react-native-reanimated';
import { textChangeRangeIsUnchanged } from 'typescript';
import fonts from './fonts'

//Theme colors
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
        fontFamily: fonts.title,
        fontWeight: "bold",
        fontSize: 21,
        textTransform: "uppercase",
        color: colors.black,
        textAlign: "center",
        letterSpacing: -0.015,
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
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.white,
        marginLeft: 10,
    },
    movieDetailsName: {
        fontFamily: fonts.title,
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 0,
        color: colors.white,
    },
    movieDescription: {
        fontFamily: fonts.text,
        fontSize: 16,
        fontWeight: "400",
        color: colors.lightGray,
        textAlign: "justify",
        lineHeight: 21,
    },
    loginTitle: {
        fontFamily: fonts.text,
        fontSize: 36,
        color: colors.white,
        textTransform: "uppercase",
        marginBottom: 50,
    },
    logoutText: {
        fontFamily: fonts.title,
        textTransform: "uppercase",
        color: colors.black,
    },
    movieTitle: {
        fontFamily: fonts.text,
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white,
    },
    movieYear: {
        fontFamily: fonts.text,
        fontWeight: "bold",
        fontSize: 16,
        color: colors.primary,
    },
    movieSubTitle: {
        fontFamily: fonts.text,
        fontSize: 16,
        fontWeight: "400",
        color: colors.white,
    },
    
    //review
    reviewUser: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.white,
        marginLeft: 15,
    },
    reviewText: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.lightGray,
    },

    reviewInput:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.lightGray,
        minHeight: 100,
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
    textInput: {
        width: 290,
        height: 50,
        fontFamily: fonts.text,
        borderWidth: 1,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },
    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
        zIndex: -10,
    },
    eyesIcon: {
        width: 25,
        height: 25,
    },
    toggle: {
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
    movieDescription: {
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
        width: "95%",
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
        paddingBottom: 10,
    },
    detailContainer: {
        backgroundColor: colors.background,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    goBackContainer: {
        width: 290,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 15,
    },
    movieImageContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    movieImage: {
        width: "100%",
        height: 163,
    },
    scrollTextContainer: {
        marginVertical: 20,
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E1E1E1",
    },
    movieDetails: {
        marginTop: 10,
    },

    //review
    reviewContainer:{
        backgroundColor: colors.mediumGray,
        width: "96%",
        marginTop: 10,
    },
    reviewImg: {
        width: 20,
        height: 20,
    },    
    //Container with rounded corners and shadows
    baseContainer:{
        width: "95%",
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
        //elevation: 4, 
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 10, 
    },
    //aligns
    alignCenter:{
        alignItems: "center",
        justifyContent: "space-around",
    }
});

const nav = StyleSheet.create({
    leftText: {
        fontFamily: fonts.title,
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 26,
        letterSpacing: -0.015,
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

const select = StyleSheet.create({
    
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 15
    },
    modalItem: {
        width: '100%',
        backgroundColor: colors.mediumGray,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    modalItemText: {
        fontFamily: fonts.text,
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: colors.white
    },
    filterContainer: {
        width: 300,
        height: 80,
        backgroundColor: colors.mediumGray,
        padding: 12,
        borderRadius: 10,
        marginBottom: 20
    },
    filterSelectContainer: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12
    },

    filterSelectText: {
        fontFamily: fonts.text,
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: colors.white
    },
    pickerIcon: {
        position: "absolute",
        bottom: 22,
        right: 17,
        //elevation: 5,
    },

    
    container: {
        width: 380,
        height: 100,
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
});

const scroll = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        marginTop: 20
    },
    scrollView: {
        backgroundColor: colors.background,
        marginHorizontal: 0,
        marginVertical: 0,
    },
    text: {
        fontSize: 42,
    },
});

// Common styles
const box = StyleSheet.create({
    VBox: {
        flexDirection: "column",
    },
    HBox: {
        flexDirection: "row",
    },
    border:{
        borderWidth: 2,
        borderColor: colors.lightGray,
        borderRadius: 5,
        padding: 10,
    },
    alignCenter:{
        alignItems: "center",
    },
    input:{
        borderWidth: 1,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    }
});

const margin = StyleSheet.create({    
    top5:{
        marginTop: 5,
    },
    top8:{
        marginTop: 8,
    },
    top10:{
        marginTop: 10,
    },
    bottom10:{
        marginBottom: 10,
    },
    padding:{
        padding: 17,
    },
});


export { colors, theme, text, nav, select, scroll, box, margin }; 