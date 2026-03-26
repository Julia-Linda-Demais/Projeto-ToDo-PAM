import * as React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {createStaticNavigation,useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import {usuarios} from './DAO/bd.js'

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.func}>
        <View style={styles.funcE}>
        <Button style={styles.bt_hoje} onPress={() => navigation.navigate('')}>
          Hoje
        </Button>
        <Button  style={styles.bt_prog} onPress={() => navigation.navigate('')}>
          Programadores
        </Button>
        <Button  style={styles.bt_todos} onPress={() => navigation.navigate('')}>
          Todos
        </Button>
        </View>

        <View style={styles.funcD}>
        <Button style={styles.bt_concluidos} onPress={() => navigation.navigate('')}>
          Concluídos
        </Button>
        <Button  style={styles.bt_sinal} onPress={() => navigation.navigate('')}>
          Sinalizados
        </Button>
        </View> 
      </View>

      <Button onPress={() => navigation.navigate('')}>
        Criar tarefa
      </Button>
     

      <Text>
        Minhas Listas
      </Text>

      <View style={styles.div}>
        
      </View>


    </View>
  );
}

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
    Home: Home,
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
    alignItems: 'flex-direction',
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
  func: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: '100vh'
  },
  funcE: {
    backgroundColor: 'blue',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  funcD: {
    backgroundColor: 'pink',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  bt_hoje: {
    backgroundColor: 'white',
    width: '200px',
    height: '150px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: '150px'
  }
});

    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
