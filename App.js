import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput } from 'react-native';


const Separator = () => (
  <View style={styles.separator} />

);


const App=()=> {
  // uso de state
 
  const [number,setNumber] = useState('0')
  
 let  valor = number;
 let conver= valor *1 /1000;
 let kiloconver= valor/1000;
 let metroconver=valor *100;
 let centiconver= valor *1/100;
 let kilocmconver= valor * (1000/1) * (100/1);
 let centiconverKilo= valor * (1/100) * (1/1000);
  const MetrosKilometros = () => (
    
    Alert.alert(`${conver} Kilometros`)
  
  ); 
  const KilometrosaMetros = () => (
    
    Alert.alert(`${kiloconver} Metros`)
  
  );
  const MetrosaCentimetros = () => (
    
    Alert.alert(`${metroconver} Centimetros`)
  
  );
  const CentimetrosaMetros = () => (
    
    Alert.alert(`${centiconver} Metros`)
  
  );

  const KilometrosaCentimetros = () => (
    
    Alert.alert(`${kilocmconver} Centimetros`)
  
  ); 

  const CentimetrosaKilometros = () => (
    
    Alert.alert(`${centiconverKilo} Kilometros`)
  
  );

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Convertor!!</Text>

      
      <Separator>
      
      </Separator>
      <TextInput
      style={ styles.input}
      placeholder='ingresa el valor numerico'
      
      onChangeText={(val) => setNumber(val)}
      
        
      
      
    />

    <Text>  Value:{number} </Text>
    
      
    <Separator>
      
      </Separator>
      
      <Button
        title=" Metros a Kilómetros."
        color="#f194ff"
        
        onPress={ MetrosKilometros }
      />
      <StatusBar style="auto" />
      <Separator>
      
      </Separator>

      <Button
        title="Kilómetros a Metros"
        color="deepskyblue"
        onPress={KilometrosaMetros}
      />
       <Separator>
      
      </Separator>

      <Button
          title="Metros a Centímetros."
          color="forestgreen"
          onPress={MetrosaCentimetros}
        />
        <Separator>
      
      </Separator>

      <Button
          title="Centímetros a Metros."
          color="goldenrod"
          onPress={CentimetrosaMetros}
        />
        <Separator>
      
      </Separator>
        <Button
          title="Kilómetros a Centímetros."
          color="firebrick"
          onPress={KilometrosaCentimetros}
        />

    <Separator>
      
      </Separator>
      <Button
          title="Centímetros a Kilómetros."
          color="darkviolet"
          onPress={CentimetrosaKilometros}
        />

    </View>
   
      
    
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    color: "#fff",
    fontSize: 30
  },
  input:{
    backgroundColor:"#fff",
    width:160
  }
});

export default App;