import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemCompra({ item, onMarcar, onRemover }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMarcar}>
        <Text style={[styles.texto, item.comprado && styles.comprado]}>
          {item.nome}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRemover}>
        <Text style={styles.remover}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  texto: {
    fontSize: 16,
  },
  comprado: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
  remover: {
    color: '#E53935',
    fontWeight: 'bold',
  },
});
