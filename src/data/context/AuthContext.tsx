import route  from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Usuario from '../../model/Usuario'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'
interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
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

function gerenciarCookies(logado: boolean) {
    if(logado){
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        });
    }else{
        Cookies.remove('admin-template-auth');
    }
}

export function AuthProvider(props) {
    
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)

    async function configSessao(usuarioFirebase) {
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookies(true)
            setCarregando(false)
            
            return usuario.email
        }else{
            setUsuario(null)
            gerenciarCookies(false)
            setCarregando(false)

            return false
        }
    }

    async function loginGoogle(){
        try{
            setCarregando(true)
            const res = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            configSessao(res.user)
            route.push('/')

        }finally{
            setCarregando(false)
        }
    }

    async function logout() {

        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configSessao(null)

        }finally{
            setCarregando(false);
        }

    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configSessao)
            return () => cancelar()
        } else{
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            logout,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;