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
        <Button style={styles.bt_hoje} onPress={() => navigation.navigate('Hoje')}>
          Hoje
        </Button>
        <Button  style={styles.bt_prog} onPress={() => navigation.navigate('Programados')}>
          Programados
        </Button>
        <Button  style={styles.bt_todos} onPress={() => navigation.navigate('Todos')}>
          Todos
        </Button>
        </View>

        <View style={styles.funcD}>
        <Button style={styles.bt_concluidos} onPress={() => navigation.navigate('Concluidos')}>
          Concluídos
        </Button>
        <Button  style={styles.bt_sinal} onPress={() => navigation.navigate('Sinalizados')}>
          Sinalizados
        </Button>
        <Button style={styles.bt_criar} onPress={() => navigation.navigate('CriarTarefa')}>
        Criar tarefa
        </Button>
        </View> 
      </View>

      <Button onPress={() => navigation.navigate('')}>
        Criar tarefa
      </Button>
     
      <View style={styles.div}>
        
      </View>


    </View>
  );
}

function TodoHoje() {
  return (
    <View style={styles.container}>
      <Text>Tarefas Hoje</Text>
    </View>
  );
}

function TodoProgramados() {
  return (
    <View style={styles.container}>   
      <Text>Tarefas Programadas</Text>
    </View>
  );
}

function TodoTodos() {
  return (
    <View style={styles.container}>   
      <Text>Todas Tarefas</Text>
    </View>
  );
}
function TodoConcluidos() {
  return (
    <View style={styles.container}>   
      <Text>Tarefas Concluídas</Text>
    </View> 
  );
}
function TodoSinalizados() {
  return (
    <View style={styles.container}> 
      <Text>Tarefas Sinalizadas</Text>
    </View> 
  );
}
function CriarTarefa() {
  return (
    <View style={styles.container}> 
      <Text>Criar Tarefa</Text>
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
    Hoje: TodoHoje,
    Programados: TodoProgramados,
    Todos: TodoTodos,
    sinalizados: TodoSinalizados,
    Concluidos: TodoConcluidos,
    Sinalizados: TodoSinalizados,
    CriarTarefa: CriarTarefa,
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
    backgroundColor: '#4f4f4f',
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
    borderColor: '#dedede',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  func: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: '100vh',    
  },
  funcE: {
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '2000px',

  },
  funcD: {
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '20px',
    marginLeft: '20px',

  },
  bt_hoje: {
    backgroundColor: 'white',
    width: '150px',
    height: '120px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  bt_prog: {
    backgroundColor: 'white',
    width: '150px',
    height: '120px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  bt_todos: {
    backgroundColor: 'white',
    width: '150px',
    height: '120px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  bt_concluidos: {
    backgroundColor: 'white',
    width: '150px',
    height: '120px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  bt_sinal: {
    backgroundColor: 'white',
    width: '150px',
    height: '120px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  bt_criar: {
    backgroundColor: 'white',
    width: '150px',
    height: '120px',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  }
});

