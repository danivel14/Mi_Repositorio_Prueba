import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = () => {
    let tempErrors = { email: '', password: '' };

    if (!email) tempErrors.email = 'Este campo es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'Correo inválido';
    if (!password) tempErrors.password = 'Este campo es obligatorio';

    setErrors(tempErrors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>

        <CustomInput
          type="email"
          value={email}
          placeholder="Correo"
          onChange={setEmail}
          error={errors.email}
        />
        <CustomInput
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={setPassword}
          error={errors.password}
        />

        <CustomButton title="Login" onPress={handleLogin} variant="primary" />
        <CustomButton title="Registrarse" onPress={() => {}} variant="secondary" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 28,
    width: '88%',
    maxWidth: 380,
    alignItems: 'center', // 🔹 centra internamente el contenido
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
  },
});