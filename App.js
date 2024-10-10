import { View, Text} from 'react-native';
import Teste from './src/components/vehicleSelectionScreen'
import styles from './src/screen/vehiclePrice/style'

export default function FipeScreen() {
  return (
    <View style={styles.container}>
      <Teste/>
    </View>
  );
}