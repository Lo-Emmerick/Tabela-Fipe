import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './style'

export default (props) => {
    return (
        <>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('VehicleBrand')}
            >
            <Image source={props.imagem} style={styles.icon} />
            <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </>
    );
  };