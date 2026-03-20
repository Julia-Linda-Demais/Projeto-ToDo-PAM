import * as React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {createStaticNavigation,useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import {usuarios} from './DAO/bd.js'

function TelaLogin () {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState ('');

  const fazerLogin = () => {

    const userEncontrado = usuarios.find((u) => u.usuario === usuario && u.senha === senha);

    if(userEncontrado) {
      navigation.navigate('Home')
    } else{
      Alert.alert('Erro', 'Usuário ou senha inválidos!');
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput style={styles.formulario} placeholder="Usuário" onChangeText={setUsuario} value={usuario} autoCapitalize="none"/>
      <TextInput style={styles.formulario} placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha} autoCapitalize="none"/>
      
      <Button onPress={fazerLogin}>Entrar</Button>
    </View>
  );
}


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const MyStack = createStackNavigator({
  screens: {
    Login: TelaLogin,
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formulario: {
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
