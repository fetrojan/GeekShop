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
    scrollContainer: {
        flex: 1,
        padding: 10,
    },
    containerCart: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "#070708",
    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#2C2E43',
        borderRadius: 5,
        borderColor: '#FF4081',
        borderWidth: 1,
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
    footer: {
        padding: 20,
        borderTopWidth: 1,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    checkoutButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    checkoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartImage: {
        width: 60, 
        height: 60,
        marginRight: 10,
    },
    cartDetails: {
        flex: 1,
    },
})