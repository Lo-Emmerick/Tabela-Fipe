import { View, Text} from 'react-native';
import Header from '../header'
import styles from './style'

export default function FipeScreen() {
  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>CG 160 FAN Flex</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Marca:</Text>
          <Text style={styles.value}>HONDA</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Ano:</Text>
          <Text style={styles.value}>2024</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Código FIPE:</Text>
          <Text style={styles.value}>811147-2</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Combustível:</Text>
          <Text style={styles.value}>Gasolina</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mês Referência:</Text>
          <Text style={styles.value}>setembro de 2024</Text>
        </View>

        <Text style={styles.price}>R$ 16.720,00</Text>
      </View>
    </View>
  );
}