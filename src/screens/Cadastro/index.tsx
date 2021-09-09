import * as React from 'react';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

export interface CadastroProps {}

export function Cadastro (props: CadastroProps) {

    const nav = useNavigation();

    return (
      <ImageBackground source={require('./../../assets/img/BackgroundP.png')}
                            style={styles.background}>
      <View style={styles.container}>
        <StatusBar style="dark"/>
      </View>
      <View style={styles.container2}>
        <Text style={styles.texta}>Cadastre-se</Text>
        
        <Input placeholder="Usuário"
          leftIcon={{name:"person", color:"black"}}
          inputStyle={{color:'black'}}
          placeholderTextColor="lightgrey"
          inputContainerStyle={styles.inputContainer}
          keyboardType="email-address"
        />
        <Input placeholder="Email"
          leftIcon={{name:"email", color:"black"}}
          inputStyle={{color:'black'}}
          placeholderTextColor="lightgrey"
          inputContainerStyle={styles.inputContainer}
          keyboardType="email-address"
        />
        <Input placeholder="Senha"
          secureTextEntry
          leftIcon={{name:"lock", color:"black"}}
          placeholderTextColor="lightgrey"
          inputContainerStyle={styles.inputContainer}
          inputStyle={{color:'black'}}
        />
        <Button title="Cadastrar" buttonStyle={{borderRadius: 30, backgroundColor: '#1C3144', marginTop: 10}}></Button>
      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
background: {
  width: '100%',
  height: '100%',  
},

container: {
  flex:1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20,
  alignItems: 'stretch' 
},

texta: {
  padding: 10,
  color:'black',
  fontSize: 20,
  paddingLeft: 20,
  fontStyle: 'italic'
},

container2: {
  flex:1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20,
  paddingBottom: 300
   
},

criarcontalogin: {
  color:'black',
  fontSize: 13.5,
  textAlign: 'center',
  paddingTop: 1215,
  textDecorationLine: 'underline'
},

inputContainer: { 
  backgroundColor: '#F1F5F4',
  padding: 5,
  marginBottom: -29,
  borderRadius: 30
}
})