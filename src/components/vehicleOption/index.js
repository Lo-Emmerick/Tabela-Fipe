import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './style'
import { useNavigation } from "@react-navigation/native";

export default (props) => {
  const navigation = useNavigation();
  const selectBrand = () => {
    navigation.navigate('SelectBrand', { type: props.text, text: "a marca" })
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