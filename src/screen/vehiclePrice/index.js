import { View, Text} from 'react-native';
import Header from '../../components/header'
import styles from './style'

export default function FipeScreen({ route: { params } }) {
  console.log(params);
  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>{params.Modelo}</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Marca:</Text>
          <Text style={styles.value}>{params.Marca}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Ano:</Text>
          <Text style={styles.value}>{params.AnoModelo}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Código FIPE:</Text>
          <Text style={styles.value}>{params.CodigoFipe}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Combustível:</Text>
          <Text style={styles.value}>{params.Combustivel}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mês Referência:</Text>
          <Text style={styles.value}>{params.MesReferencia}</Text>
        </View>

        <Text style={styles.price}>{params.Valor}</Text>
      </View>
    </View>
  );
}