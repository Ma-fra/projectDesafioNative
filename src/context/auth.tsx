import jwt_decode from "jwt-decode";
import React, { createContext, useState } from "react";

import { LoginType } from "../models/LoginType";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [dadosUsuarioLogin, setDadosUsuarioLogin] = useState<LoginType>();

  const armazenaDadosUsuarioLogin = (jwt: any) => {
    var tokenDecodificado: any = jwt_decode(jwt);

    //armazenando apenas a chave usuário do json decodificado
    var usuario = tokenDecodificado.usuario;

    //está transferindo a string json contida dentro da variável usuario num objeto
    usuario = JSON.parse(usuario);

    setDadosUsuarioLogin({
      id: usuario?.id,
      login: usuario?.email,
      password: usuario?.password,
      token: jwt,
    });
  };
  return (
    <AuthContext.Provider
      value={{ dadosUsuarioLogin, armazenaDadosUsuarioLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// function AuthProvider({children}){
//     return(
//         <AuthContext.Provider value={{nome: "Marcelle"}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider;
