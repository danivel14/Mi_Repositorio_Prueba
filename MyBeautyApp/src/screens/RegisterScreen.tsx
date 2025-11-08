import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton'; 
import { useAuth } from '../contexts/AuthContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function RegisterScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { login } = useAuth(); 

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState(''); 

    const handleRegister = () => {
        if (!fullName || !email || !password || !confirmPassword || !phone || !dob) {
            Alert.alert('Por favor, complete todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Las contraseñas no coinciden.');
            return;
        }

        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReg.test(email)) {
            Alert.alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        const registrationSuccess = login(email); 

        if (registrationSuccess) {
            Alert.alert('Éxito', '¡Registro completado y sesión iniciada!');
            navigation.reset({
                index: 0,
                routes: [{ 
                    name: 'Tabs',
                    params: { screen: 'Home' },
                }], 
            });
        } else {
            Alert.alert('Error', 'Registro fallido. Por favor, intente de nuevo.');
        }

        console.log('Registro Data:', { fullName, email, password, phone, dob });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Fecha de nacimiento (DD/MM/AAAA)"
                value={dob}
                onChangeText={setDob}
                keyboardType="number-pad" // Or 'default' with a date picker
            />

            <CustomButton title="Registrarse" onPress={handleRegister} />

            <CustomButton
                title="Ya tengo una cuenta"
                onPress={() => navigation.navigate('Login')}
                type="tertiary" // Assuming you have different button types
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});