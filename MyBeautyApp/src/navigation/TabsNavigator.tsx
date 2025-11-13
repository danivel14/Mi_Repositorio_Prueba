import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type TabsParamList = {
    Home: {newItem?: string} | undefined;
    Profile: undefined;
}
const Tab = createBottomTabNavigator<TabsParamList>();
export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Perfil'}}/>
        </Tab.Navigator>
    );
}