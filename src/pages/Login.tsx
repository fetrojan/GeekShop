import { useState } from "react"
import { StyleSheet, TextInput, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { useAuth } from "../context/AuthContext"
import { globalStyles } from "../global/styles"

export const Login = ({navigation}) => {

    const { login } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function navigateToHome() {
        navigation.navigate('Home')
    }

    function handleLogin() {
        login(username, password)
        navigateToHome()
    }

    return (
        <SafeAreaView style={globalStyles.containerLog}>
            <TextInput
                style={globalStyles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername} />

            <TextInput
                style={globalStyles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword} />

            <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
                <Text style={globalStyles.buttonText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}