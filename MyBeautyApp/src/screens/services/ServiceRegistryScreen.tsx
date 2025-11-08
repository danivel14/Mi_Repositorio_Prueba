import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

export default function ServiceRegistryScreen({navigation}: any){
    const [item, setItem] = useState('');

    const handleOnSave = () => {
        if (item.trim() === '') return;

        navigation.navigate('Tabs', {
            screen: 'Home',
            params: {newItem: item}
        });
    };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Agregar nuevo servicio</Text>
            <CustomInput 
                value={item} 
                placeholder="ingresa el servicio..." 
                onChange={setItem}
            />
            <CustomButton 
                title="Guardar"
                onPress={handleOnSave}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 20, 
        justifyContent: 'center' 
    },
    title:{
        fontSize: 20, marginBottom: 10 
    }
})