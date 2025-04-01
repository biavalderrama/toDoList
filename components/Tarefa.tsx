import { Text, StyleSheet, View, Button } from "react-native";
import _tarefa from "../types/tarefa";

export default function Tarefa(props:{
    dados:_tarefa, 
    handleDeletePress: any
}){
    return <View style={styles.view}>
                <Text>{props.dados.texto}</Text>
                <Button title="Excluir" color="red" onPress={()=>{ props.handleDeletePress(props.dados.id) }}/>
            </View>;
}

const styles = StyleSheet.create({
    view:{
        borderWidth: 1,
        marginBottom: 10,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'ivory',
        marginLeft: 15,
    },
})