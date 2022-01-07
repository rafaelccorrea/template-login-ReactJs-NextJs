import { createContext, useState } from 'react'
import Usuario from '../../model/Usuario'
import firebase from '../../firebase/config'

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormal(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.nome,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoUrl
    }
}

export function AuthProvider(props) {
    
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function loginGoogle(){

    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProps;