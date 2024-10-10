import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Header from '../../components/header'
import styles from './style'

const VehicleBrandScreen = (props) => {
  const [searchText, setSearchText] = useState('');
  const [filteredBrand, setFilteredBrand] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.toLowerCase() === '2024') {
      setFilteredBrand('2024');
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
      <Text style={styles.subtitle}>Selecione {props.type} do veículo</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder={`Busque ${props.type} do veículo`}
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
};

export default VehicleBrandScreen;