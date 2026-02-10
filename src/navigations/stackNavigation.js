import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home";
import AddNotes from '../screens/AddNotes/addNotes'

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddNotes" component={AddNotes} options={{ headerShown: false }} />


        </Stack.Navigator>
    )
}