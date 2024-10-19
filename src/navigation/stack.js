import React from "react";
import { createStackNavigator} from "@react-navigation/stack"
import Home from "../screen/home"
import Selection from "../screen/sectionScreen"
import Price from "../screen/vehiclePrice"

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name= "Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name= "SelectBrand" component={Selection} options={{ headerShown: false }}/>
        <Stack.Screen name= "Price" component={Price} options={{ headerShown: false }}/>
    </Stack.Navigator>
)