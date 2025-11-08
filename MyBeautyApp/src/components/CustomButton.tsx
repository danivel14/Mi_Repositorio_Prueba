import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

// Rename 'Props' to a more descriptive name, e.g., 'CustomButtonProps'
// Also, remove the 'variant' prop and use 'type' consistently.
type CustomButtonProps = {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'tertiary'; // This is the prop we want to use
  // If you want to keep 'variant' for styling, you'd need to reconcile them.
  // For now, let's assume 'type' is the main styling differentiator.
};

export default function CustomButton({
  title,
  onPress,
  type = "primary", // Use 'type' here as well, with a default value
}: CustomButtonProps) { // Use the updated Props type

  // The styles should now be based on 'type'
  const styles = getStyles(type);

  return (
    <View style={{ width: '90%', marginVertical: 5 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

// Update getStyles to accept 'type'
const getStyles = (type: 'primary' | 'secondary' | 'tertiary') => // Updated type
  StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
      // Apply styles based on 'type'
      backgroundColor: type === "primary" ? '#1A1A33' : (type === "secondary" ? '#E8E6FA' : 'transparent'),
      borderWidth: type === "tertiary" ? 1 : 0, // Tertiary might have a border
      borderColor: type === "tertiary" ? '#1A1A33' : 'transparent', // Example tertiary border color
    },
    buttonTitle: {
      color: type === "primary" ? '#fff' : (type === "secondary" ? '#000' : '#1A1A33'), // Adjust colors
      fontWeight: 'bold',
      fontSize: 16,
    },
  });