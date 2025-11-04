import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({route}: Props) {
    const { email } = route.params;

    return(
        <View>
            <Text>Bienvenido</Text>
            <Text>Correo: {email}</Text>
        </View>
    )
}