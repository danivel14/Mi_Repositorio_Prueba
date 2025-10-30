import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

type Props = {
  type?: 'text' | 'email' | 'password' | 'number';
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
  required?: boolean;
  error?: string;
};

export default function CustomInput({ type = "text", value, placeholder, onChange, error }: Props) {
  const [isSecureText, setIsSecureText] = useState(type === "password");

  const icon = type === 'email' ? 'email' :
               type === 'password' ? 'lock' : 'text-fields';

  return (
    <View style={styles.wrapper}>
      <View style={[
        styles.inputContainer,
        error ? styles.inputError : null
      ]}>
        <MaterialIcons name={icon as any} size={22} color="#555" />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isSecureText}
          style={styles.input}
        />
        {type === 'password' && (
          <TouchableOpacity onPress={() => setIsSecureText(!isSecureText)}>
            <Ionicons name={isSecureText ? 'eye-off' : 'eye'} size={22} color="#555" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 5,
    marginLeft: 5,
  },
});