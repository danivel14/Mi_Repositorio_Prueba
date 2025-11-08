import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { navigationRef } from "../navigation/NavigationService";
import { useAuth } from "../contexts/AuthContext";

export default function ProfileScreen({navigation}: any){
    const {user, logout} = useAuth();

const handleLogout = () =>{
    if (navigationRef.isReady()){
        logout();
        navigationRef.reset({
            //indice del arreglo, que indica la vista actual al momento de reiniciar el stack de navegacion
            index: 0,
            //es un array de objetos, cada uno de estos representa cada ruta que conformara el nuevo stack de navegacion 
            routes: [{name: 'Login'}],
        })
    }
}
    return(
    <View>
        {/* implementacion correcta de redefinicion de navegacion desde un componente externo  */}
        <Text>Pantalla de Perfil</Text>
        <CustomButton title="Cerrar Sesion"
        onPress={handleLogout}/>
        <Text>Usuario: {user?.email}</Text>
        {/* //intento fallido de redefinicion de stack de navegacion  */}
     <CustomButton title="Ir a login"
        onPress={()=>{
            logout();
            navigation.navigate('Login');
        }}/>

    </View>)
}