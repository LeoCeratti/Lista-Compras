import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListasContexto } from '../contexto/ListasContexto';

export default function TelaListasPendentes() {
  const { listas } = useContext(ListasContexto);
  const pendentes = listas.filter(l => !l.concluida);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listas Pendentes</Text>
      <FlatList
        data={pendentes}
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
