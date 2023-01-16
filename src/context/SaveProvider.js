import { createContext, useState } from "react";

export const SaveContext = createContext();

export function SaveProvider({ children }) {
  const [userSkills, setUserSkills] = useState([]);
  const [atualizar, setAtualizar] = useState(false);

  function addItem(itens) {
    setUserSkills(itens);
    console.log(userSkills);
  }

  function clearSave() {
    setUserSkills([]);
  }
  function carregar() {
    setAtualizar(!atualizar);
  }

  return (
    <SaveContext.Provider
      value={{ addItem, clearSave, userSkills, atualizar, carregar }}
    >
      {children}
    </SaveContext.Provider>
  );
}
