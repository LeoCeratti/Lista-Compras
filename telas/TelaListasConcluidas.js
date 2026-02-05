import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListasContexto } from '../contexto/ListasContexto';

export default function TelaListasConcluidas() {
  const { listas } = useContext(ListasContexto);
  const concluidas = listas.filter(l => l.concluida);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listas Concluídas</Text>
      <FlatList
        data={concluidas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 8 },
});
