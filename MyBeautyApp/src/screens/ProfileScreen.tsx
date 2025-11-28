import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeColors } from "../utils/theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setClientProfile } from "../store/clientSlice";

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const savedProfile = useAppSelector((state) => state.client);
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const navigation = useNavigation<any>();

  const [clientName, setClientName] = useState(savedProfile.name);
  const [phone, setPhone] = useState(savedProfile.phone);
  const [favoriteService, setFavoriteService] = useState(savedProfile.favoriteService);
  const [notes, setNotes] = useState(savedProfile.notes);

  const handleSave = () => {
    if (!clientName || !phone || !favoriteService) {
      Alert.alert(
        "Datos incompletos",
        "Por favor complete nombre, teléfono y servicio favorito."
      );
      return;
    }

    //utilizar redux para guardar la informacion globalmente
    dispatch(
      setClientProfile({
        name: clientName,
        phone,
        favoriteService,
        notes
      })
    );

    Alert.alert(
      "Perfil guardado",
      "La información del cliente se ha guardado correctamente.\nEsta información puede usarse para personalizar futuras citas."
    );
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          Perfil del cliente
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Registre la información básica del cliente y sus preferencias de
          servicios de belleza. Esta pantalla sirve como base para futuros
          flujos de agendar y personalizar citas.
        </Text>

        {/* Nombre del cliente */}
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Nombre del cliente
        </Text>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          value={clientName}
          onChangeText={setClientName}
          placeholder="Ej: María López"
          placeholderTextColor="rgba(148,163,184,0.9)"
        />

        {/* Teléfono */}
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Teléfono de contacto
        </Text>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Ej: +504 9999-9999"
          placeholderTextColor="rgba(148,163,184,0.9)"
        />

        {/* Servicio favorito */}
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Servicio de salón favorito
        </Text>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          value={favoriteService}
          onChangeText={setFavoriteService}
          placeholder="Ej: Corte, tinte, manicure, peinado..."
          placeholderTextColor="rgba(148,163,184,0.9)"
        />

        {/* Notas */}
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Notas y preferencias
        </Text>
        <TextInput
          style={[
            styles.input,
            styles.textArea,
            { color: colors.text, borderColor: colors.border },
          ]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Ej: Prefiere coloraciones sin amoníaco, sensibilidad en cuero cabelludo..."
          placeholderTextColor="rgba(148,163,184,0.9)"
          multiline
        />

        <CustomButton
          title="Guardar perfil de cliente"
          onPress={handleSave}
          variant="primary"
        />

        <CustomButton
          title="Volver al panel de citas"
          onPress={() => navigation.goBack()}  // 🔙 regreso a HomeScreen (Stack)
          variant="secondary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 24,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 18,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default ProfileScreen;