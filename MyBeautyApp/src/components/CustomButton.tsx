import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function CustomButton({ title, onPress, variant = "primary" }: Props) {
  const styles = getStyles(variant);

  return (
    <View style={{ width: '90%', marginVertical: 5 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (variant: 'primary' | 'secondary') =>
  StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
      backgroundColor: variant === "primary" ? '#1A1A33' : '#E8E6FA',
    },
    buttonTitle: {
      color: variant === "primary" ? '#fff' : '#000',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });