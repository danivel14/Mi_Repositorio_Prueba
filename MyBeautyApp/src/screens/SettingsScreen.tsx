import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeColors } from "../utils/theme";
import { i18n } from "../contexts/LanguageContext";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
    const navigation = useNavigation<any>();
  const colors = getThemeColors(theme);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.title, { color: colors.text }]}>{i18n.t("settings")}</Text>

        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.text }]}>{i18n.t("darkMode")}</Text>
          <Switch
            value={theme === "dark"}
            onValueChange={toggleTheme}
            thumbColor={colors.primary}
          />
        </View>

        <TouchableOpacity onPress={() => setShowAdvanced(!showAdvanced)}>
          <Text style={[styles.advancedToggle, { color: colors.text }]}>
            {i18n.t("advanced")}
          </Text>
        </TouchableOpacity>

        {showAdvanced && (
          <View style={styles.advancedSection}>
            <Text style={[styles.label, { color: colors.text }]}>Notificaciones</Text>
            <Text style={[styles.label, { color: colors.text }]}>Idioma del sistema</Text>
          </View>
        )}

         <CustomButton
                  title="Volver al panel de citas"
                  onPress={() => navigation.navigate("Home")}  // 🔙 regreso a HomeScreen (Stack)
                  variant="secondary"
                />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  advancedToggle: {
    fontSize: 16,
    fontWeight: "500",
  },
  advancedSection: {
    marginTop: 20,
    gap: 10,
  },
});

export default SettingsScreen;