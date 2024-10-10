// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import VehicleSelectionScreen from './VehicleSelectionScreen';  
// import VehicleBrandScreen from './VehicleBrandScreen';          

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="VehicleSelection">
//         <Stack.Screen 
//           name="VehicleSelection" 
//           component={VehicleSelectionScreen} 
//           options={{ title: 'Seleção de Veículo' }} 
//         />
//         <Stack.Screen 
//           name="VehicleBrand" 
//           component={VehicleBrandScreen} 
//           options={{ title: 'Seleção de Marca' }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Header from '../header'
import styles from './style'

export default function VehicleBrandScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredBrand, setFilteredBrand] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.toLowerCase() === 'cg') {
      setFilteredBrand('CG 160 CARGO');
    } else {
      setFilteredBrand('');
    }
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredBrand('');
  };

  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.subtitle}>Selecione o modelo do veículo</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o modelo"
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText ? (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {filteredBrand ? (
        <TouchableOpacity style={styles.resultButton}>
          <Text style={styles.resultText}>{filteredBrand}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}