import * as React from 'react';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useState } from 'react';
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface LoginProps {
}


export function Login (props: LoginProps) {

    const nav = useNavigation();

    const [erro, setErro] = useState<null|string>(null);
        
    const login = async (dados:any) => {
        setErro(null)


        await new Promise((resolve, error) => setTimeout(() => resolve(''), 1000))

        console.log(dados)
        if (dados.email == 'teste@gmail.com' && dados.senha == '123456')
          nav.navigate('Home')

        else
          setErro('E-mail ou Senha Incorreto!!!')
    }
    return (
      <ImageBackground source={require('./../../assets/img/BackgroundP.png')}
                            style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('Cadastro')}>
        <Text style={styles.modeltexto3}>Não tem uma conta? Clique aqui para se cadastra.</Text>
        </TouchableOpacity>
        <StatusBar style="dark"/>
      </View>
      <Formik
        initialValues={{email:'', senha: ''}}

        validationSchema={Yup.object({
          email: Yup.string().required('Campo Obrigatório').email('Campo e-mail'),
          
          senha: Yup.string().required('Campo Obrigatório').min(6,'Inserir uma senha com 6 digitos')

        })}
        onSubmit={login}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (

        <View style={styles.container2}>
          <Text style={styles.modeltexto}>Entrar</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>

          { touched.email && <Text style={styles.avisoerror}>{errors.email}</Text>}

          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>

          { touched.senha && <Text style={styles.avisoerror}>{errors.senha}</Text>}

          { erro != null && <Text style={{color: 'blue', fontSize:25, textAlign: 'center', marginBottom: 20}}>{erro}</Text>}

          { !isSubmitting && <Button title="Logar" onPress={handleSubmit} buttonStyle={{borderRadius: 25, backgroundColor: '#5882FA', marginTop: 5}}></Button>}

        </View>)}
      </Formik>
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
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    alignItems: 'stretch' 
  },
  
  modeltexto: {
    textAlign: 'left',
    color:'black',
    fontSize: 25,
    paddingLeft: 15,
  },
  
  container2: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    paddingBottom: 100
  },
  
  modeltexto3: {
    color:'#FF0040',
    fontSize: 20,
    paddingTop: 30,
  },
  
  avisoerror: {
    color:'#FFFFFF',
    fontSize: 20,
    textAlign: 'right'
  }
  
  })