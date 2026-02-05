import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { ListasContexto } from '../contexto/ListasContexto';
import ItemCompra from '../componentes/ItemCompra';

export default function TelaItensLista({ route }) {
  const { idLista } = route.params;
  const { listas, adicionarItem, marcarItem, removerItem, concluirLista } =
    useContext(ListasContexto);

  const lista = listas.find(l => l.id === idLista);
  const [nomeItem, setNomeItem] = useState('');

  function salvarItem() {
    if (!nomeItem.trim()) return;
    adicionarItem(idLista, nomeItem);
    setNomeItem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{lista.nome}</Text>

      <TextInput
        placeholder="Adicionar item à lista"
        style={styles.input}
        value={nomeItem}
        onChangeText={setNomeItem}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarItem}>
        <Text style={styles.botaoTexto}>Adicionar Item</Text>
      </TouchableOpacity>

      <FlatList
        data={lista.itens}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCompra
            item={item}
            onMarcar={() => marcarItem(idLista, item.id)}
            onRemover={() => removerItem(idLista, item.id)}
          />
        )}
      />

      <TouchableOpacity
        style={styles.concluir}
        onPress={() => concluirLista(idLista)}
      >
        <Text style={styles.concluirTexto}>Concluir Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  botaoTexto: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },
  concluir: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  concluirTexto: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },
});
