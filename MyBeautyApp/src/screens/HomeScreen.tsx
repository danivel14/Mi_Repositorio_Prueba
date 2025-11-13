import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({navigation, route}: any) {
const [ items, setItems] = useState<string[]> ([]);

const routeItem = route.params?.newItem;


const handleRegisterService = () =>{
navigation.navigate('ServiceRegistry');
}
    return(
        <View>
            <CustomButton title="Agrega un Servicio"
                onPress={handleRegisterService}/>
        </View>
    )
}