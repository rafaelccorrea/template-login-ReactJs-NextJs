import route  from 'next/router'
import { createContext, useState } from 'react'
import Usuario from '../../model/Usuario'
import firebase from '../../firebase/config'

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

export function AuthProvider(props) {
    
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function loginGoogle(){
        const res = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        if(res.user?.email){
            const usuario = await usuarioNormalizado(res.user)
            setUsuario(usuario)
            route.push('/')
        }
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
export default AuthContext;