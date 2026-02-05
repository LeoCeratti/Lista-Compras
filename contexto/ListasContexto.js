import React, { createContext, useState } from 'react';

export const ListasContexto = createContext();

export function ListasProvider({ children }) {
  const [listas, setListas] = useState([]);

  function criarLista(nome) {
    setListas([
      ...listas,
      { id: Date.now(), nome, concluida: false, itens: [] },
    ]);
  }

  function adicionarItem(idLista, nomeItem) {
    setListas(
      listas.map(lista =>
        lista.id === idLista
          ? {
              ...lista,
              itens: [
                ...lista.itens,
                { id: Date.now(), nome: nomeItem, comprado: false },
              ],
            }
          : lista
      )
    );
  }

  function marcarItem(idLista, idItem) {
    setListas(
      listas.map(lista =>
        lista.id === idLista
          ? {
              ...lista,
              itens: lista.itens.map(item =>
                item.id === idItem
                  ? { ...item, comprado: !item.comprado }
                  : item
              ),
            }
          : lista
      )
    );
  }

  function removerItem(idLista, idItem) {
    setListas(
      listas.map(lista =>
        lista.id === idLista
          ? {
              ...lista,
              itens: lista.itens.filter(item => item.id !== idItem),
            }
          : lista
      )
    );
  }

  function concluirLista(idLista) {
    setListas(
      listas.map(lista =>
        lista.id === idLista ? { ...lista, concluida: true } : lista
      )
    );
  }

  return (
    <ListasContexto.Provider
      value={{
        listas,
        criarLista,
        adicionarItem,
        marcarItem,
        removerItem,
        concluirLista,
      }}
    >
      {children}
    </ListasContexto.Provider>
  );
}
