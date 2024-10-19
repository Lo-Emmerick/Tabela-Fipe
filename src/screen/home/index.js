import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/header'
import styles from './style'
import Option from '../../components/vehicleOption'

const VehicleSelectionScreen = () => { 
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.subtitle}>Para encontrar o preço de um veículo na tabela FIPE siga as instruções abaixo:</Text>
      <Text style={styles.selectText}>Selecione o tipo de veículo</Text>
      <Option imagem={require('../../../assets/moto.png')} text="Motocicleta"/> 
      <Option imagem={require('../../../assets/car.png')} text="Carro"/> 
      <Option imagem={require('../../../assets/truck.png')} text="Caminhão"/> 
    </View>
  );
};

export default VehicleSelectionScreen;