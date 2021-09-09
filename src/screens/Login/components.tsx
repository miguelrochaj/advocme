import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export interface InputRoundProps {
    senha?: boolean;
    icone: string;
    placeholder: string;
    onChangeText(texto: string): void ;
    onBlur?(error: any): void;
}

export function InputRound (props: InputRoundProps) {

    return (
      <View>
         <Input placeholder={props.placeholder}
          leftIcon={{name:props.icone, color:"#000000"}}
          secureTextEntry={props.senha} 
          onBlur={props.onBlur} 
          inputStyle={{color:'#000000'}}
          placeholderTextColor="#38610B"
          inputContainerStyle={styles.inputContainer}
          onChangeText={props.onChangeText}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: { 
        backgroundColor: '#F5FBEF',
        padding: 10,
        marginBottom: -20,
      }
    
});