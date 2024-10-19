import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './style'
import { useNavigation } from "@react-navigation/native";

export default (props) => {
  const navigation = useNavigation();

  const getType = () => {
    switch (props.text) {
      case "Motocicleta":
        return "motos"
      case "Carro":
        return "carros"
      default:
        return "caminhoes"
    }
  }

  const selectBrand = () => {
    navigation.navigate('SelectBrand', { type: getType()})
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => { selectBrand() }}>
        <Image source={props.imagem} style={styles.icon} />
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
};