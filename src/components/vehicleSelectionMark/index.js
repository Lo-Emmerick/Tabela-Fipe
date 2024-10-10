import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Header from '../header'
import styles from './style'


export default function VehicleBrandScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredBrand, setFilteredBrand] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.toLowerCase() === 'honda') {
      setFilteredBrand('HONDA');
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
      <Text style={styles.subtitle}>Selecione a marca de veículo</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a marca"
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