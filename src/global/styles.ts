import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: "#070708",
    },
    containerLog: {
        backgroundColor: "#070708",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
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
    input: {
        width: '80%',
        height: 40,
        borderColor: '#D9DEFF',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 75,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#CCC',
        marginBottom: 30,
        textAlign: 'center',
    },
})