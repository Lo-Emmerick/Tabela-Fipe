import { View, Text} from 'react-native';
import Teste from './src/screen/vehicleSelectionScreen'
import styles from './src/screen/vehiclePrice/style'

export default function FipeScreen() {
  return (
    <View style={styles.container}>
      <Teste type="o modelo"/>
    </View>
  );
}