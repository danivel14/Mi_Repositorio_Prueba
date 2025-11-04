
import { View, Text } from "react-native";


export default function HomeScreen({route}: any) {
    const { email } = route.params;

    return(
        <View>
            <Text>Bienvenido a Home</Text>
        </View>
    )
}