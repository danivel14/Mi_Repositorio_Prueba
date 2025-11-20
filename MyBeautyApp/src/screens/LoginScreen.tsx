import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (email.endsWith(".edu")) {
      login(email);
      navigation.navigate("Home");
    } else {
      alert("Solo se permite acceso a correos .edu");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{i18n.t("email")}</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title={i18n.t("login")} onPress={handleLogin} color="#FFD3E0" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
  },
});

export default LoginScreen;