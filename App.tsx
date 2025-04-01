import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import _tarefa from './types/tarefa';
import Tarefa from './components/Tarefa';

export default function App() {

  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa(){
    if(novaTarefa == ''){
      alert("Insira um texto");
      return;
    }
    let tarefa : _tarefa = {
      id : tarefas.length+1,
      texto : novaTarefa
    };
    setTarefas([...tarefas, tarefa]);
    setNovaTarefa('');
  }

  function mostrarTarefas(){
    return tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir}/>);
  }
  

  function excluir(id :number){
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
  }

  return (
    <View style={styles.container} key="main">
      <View style={styles.container2}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <View style={styles.container3}>
          <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa} placeholder="Insira sua tarefa"/>
        </View>
        <Button color={styles.button.backgroundColor} title='Adicionar tarefa' onPress={adicionarTarefa}/>

        <ScrollView style={styles.listaTarefas}>
            {mostrarTarefas()}
          </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 500,
    borderRadius: 20,
    padding: 20,
  },

  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'lightslategrey',
    marginBottom: 10,
    marginLeft: 80,
    backgroundColor: 'azure',
    width: 180,
  },

  button: {
    backgroundColor: 'palevioletred',
  },

  listaTarefas: {
    width: '100%',
    marginTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

