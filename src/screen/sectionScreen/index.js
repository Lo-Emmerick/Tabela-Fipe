import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/header';
import styles from './style';
import { FipeAPI } from '../../services/fipe-service';
import { useNavigation } from "@react-navigation/native";

const VehicleBrandScreen = ({ route: { params: { type, brand, model} } }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState('');
  const [itemList, setitemList] = useState([]);
  const [text, setNewText] = useState('');

  const api = new FipeAPI();
  api.setVehicleType(type)
  api.setBrandCode(brand)
  api.setModelCode(model)

  const fetchBrands = async () => {
    try {
      const brands = await api.getBrandList();
      setitemList(brands);
      setFilteredList(brands);
    } catch (error) {
      console.log('Erro ao buscar marcas: ', error);
    }
  };

  const fetchModels = async () => {
    try {
      api.setVehicleType(type);
      const models = await api.getModelList();
      setitemList(models.modelos);
      setFilteredList(models.modelos);
    } catch (error) {
      console.log('Erro ao buscar modelos: ', error);
    }
  };

  const fetchYear= async () => {
    try {
      api.setVehicleType(type);
      const years = await api.getYearList();
      setitemList(years);
      setFilteredList(years);
    } catch (error) {
      console.log('Erro ao buscar ano: ', error);
    }
  };

  const goToPrice = async () => {
    try {
      const models = await api.getPrice();
      navigation.push('Price', models)
    } catch (error) {
      console.log('Erro ao buscar modelos: ', error);
    }
  };

  useEffect(() => {
    if (brand == null) {
      setNewText("a marca")
      fetchBrands();
    } else if (model == null) {
      setNewText("o modelo")
      fetchModels();
    } else {
      setNewText("o ano")
      fetchYear();
    }
  }, [type]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = itemList.filter(brand =>
      brand.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredList('');
  };


  const navigation = useNavigation();
  const selectModel = (item) => {
    var props = {}
    if (brand == null) {
      props = { type: type, brand: item }
    } else if (model == null) {
      props = { type: type, brand: brand, model: item }
    } else {
      api.setYearCode(item);
      goToPrice();
    }
    navigation.push('SelectBrand', props)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.subtitle}>Selecione {text} do veículo</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder={`Busque ${text} do veículo`}
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText ? (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {filteredList.length > 0 ? (
        filteredList.map(item => (
          <TouchableOpacity key={item.codigo} style={styles.resultButton} onPress={() => selectModel(item.codigo)}>
            <Text style={styles.resultText}>{item.nome}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Nada encontrado</Text>
      )}
    </View>
  );
};

export default VehicleBrandScreen;
