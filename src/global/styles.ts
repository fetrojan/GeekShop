import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: "#070708",
    },
    card: {
        backgroundColor: "#2C2E43",
        width: '85%',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
        alignSelf: 'center',
        alignItems: "center"
    },
    cardImage: {
        width: 150,
        height: 200,
        borderRadius: 20
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        marginVertical: 10,
        color: '#F5F5F5'
    },
    cardPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF4081'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 18,
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold'
    },
    buttonRemove: {
        alignSelf: 'center',
        backgroundColor: '#FF4081',
        padding: 15,
        borderRadius: 18,
        marginTop: 10
    },
})