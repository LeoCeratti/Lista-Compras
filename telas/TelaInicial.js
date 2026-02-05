import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput
} from 'react-native';

export default function TelaInicial({ navigation }) {
  const [listas, setListas] = useState([]);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [nomeLista, setNomeLista] = useState('');

  function criarLista() {
    if (nomeLista.trim() === '') return;

    const novaLista = {
      id: Date.now().toString(),
      nome: nomeLista,
      itens: [],
      concluida: false,
    };

    setListas([...listas, novaLista]);
    setNomeLista('');
    setModalVisivel(false);
  }

  function abrirLista(lista) {
    navigation.navigate('DetalhesLista', { lista });
  }

  return (
    <View style={styles.container}>

      {listas.length === 0 ? (
        <View style={styles.estadoVazio}>
          <Text style={styles.textoVazio}>
            Você ainda não possui nenhuma lista criada.
          </Text>

          <TouchableOpacity
            style={styles.botaoPrincipal}
            onPress={() => setModalVisivel(true)}
          >
            <Text style={styles.textoBotao}>Criar nova lista</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={listas}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 80 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.cardLista}
                onPress={() => abrirLista(item)}
              >
                <Text style={styles.nomeLista}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={styles.botaoFlutuante}
            onPress={() => setModalVisivel(true)}
          >
            <Text style={styles.textoBotao}>+ Criar lista</Text>
          </TouchableOpacity>
        </>
      )}

      {/* MODAL */}
      <Modal visible={modalVisivel} transparent animationType="fade">
        <View style={styles.fundoModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloModal}>Nova Lista</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite o nome da lista"
              value={nomeLista}
              onChangeText={setNomeLista}
            />

            <View style={styles.botoesModal}>
              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoConfirmar}
                onPress={criarLista}
              >
                <Text style={styles.textoConfirmar}>Criar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 16,
  },

  estadoVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoVazio: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },

  botaoPrincipal: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardLista: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },

  nomeLista: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  botaoFlutuante: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
  },

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 10,
    padding: 20,
  },

  tituloModal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },

  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  botaoCancelar: {
    marginRight: 12,
  },

  textoCancelar: {
    color: '#777',
    fontSize: 15,
  },

  botaoConfirmar: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },

  textoConfirmar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
