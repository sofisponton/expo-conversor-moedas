import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {

  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [moedaEntrada, setMoedaEntrada] = useState('33.33')
  const [resultado, setResultado] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Conversor de Moedas</Text>
      <View>
        <Text style={styles.tbmoeda}>Moeda 1</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaOrigem}
          setMoedaOrigem={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dólar Americano" value="USD" />
          <Picker.Item label="Iene Japonês" value="JPY" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Peso Argentino" value="ARS" />

        </Picker>
      </View>

      <View>
        <Text style={styles.tbmoeda}>Moeda 2</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaDestino}
          setMoedaOrigem={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dólar Americano" value="USD" />
          <Picker.Item label="Iene Japonês" value="JPY" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Peso Argentino" value="ARS" />

        </Picker>
      </View>
      <View>
        <Text style={styles.tbmoeda}>Valor para conversão</Text>
        <TextInput
          style={styles.input}
          value={moedaEntrada}
          onChangeText={setMoedaEntrada}
          keyboardType='numeric'
        ></TextInput>
      </View>

      <Pressable style={styles.button}><Text style={styles.title}>Converter</Text></Pressable>
      <Pressable style={styles.button}><Text style={styles.title}>Limpar</Text></Pressable>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff'
  },

  picker: {
    color: '#fff',
    width: '200px'
  },

  input: {
    color: '#fff',
    textAlign: 'right'
  },
  tbmoeda: {
    color: '#fff',
  },
  button:{
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});
