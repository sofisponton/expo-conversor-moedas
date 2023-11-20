import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import titulo from './assets/title.png';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {

  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [moedaEntrada, setMoedaEntrada] = useState('33.33')
  const [resultado, setResultado] = useState('')


  const handleConverter = async () => {
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`;
    try {
      let page = await fetch(URL);
      let json = await page.json();
      //console.log(json);
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      let valor = parseFloat(valorEntrada)
      setResultado((indice*valor).toFixed(2))
    } catch (error) {
      setResultado(`Erro: ${error.message}`)
    }
  }

  const handleLimpar = () => {
    setResultado('');
    setVAlorEntrada('33.33333');
    setMoedaOrigem('BRL');
    setMoedaDestino('USD');
   }

  return (
    <View style={styles.container}>
    < Image source={titulo} style={styles.image}/>
    <View style={styles.bloco}>
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
      <View style={{paddingBottom: 20}}>
        <Text style={styles.tbmoeda}>Valor para conversão</Text>
        <TextInput
          style={styles.input}
          value={moedaEntrada}
          onChangeText={setMoedaEntrada}
          keyboardType='numeric'
        ></TextInput>
      </View>

      <Pressable style={styles.button} onPress={handleConverter}><Text style={{color: '#515140', fontWeight: 'bold'}}>Converter</Text></Pressable>
      <Text> </Text>
      <Pressable style={styles.button}onLongPress={handleLimpar}><Text style={{color: '#515140', fontWeight: 'bold'}} >Limpar</Text></Pressable>
          <View><Text style={styles.lbResultado}>{resultado}</Text></View>



      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7D4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloco:{
    backgroundColor: '#515140',
    borderRadius: 25,
    width: 270,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },

 

  picker: {
    color: '#515140',
    fontWeight: 'bold',
    width: '200px',
    marginBottom: 17
  },

  input: {
    color: '#E7E7D4',
    textAlign: 'right',
    fontWeight: 'bold'
  },
  tbmoeda: {
    color: '#E7E7D4',
    textAlign: 'left',
    fontWeight: 'bold',
    
  },
  button:{
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#E7E7D4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  lbResultado:{
    color: '#fff',
  },
  image:{
    width: 200, 
    height: 200
  }
});