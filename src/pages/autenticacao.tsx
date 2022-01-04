import { useState } from "react";
import Auth from "../components/auth/auth";

export default function Authenticate(){

    const [ modo, setModo ] = useState<'login' | 'cadastro'>('login')
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    return (
        <div>
            <h1>Autenticacao</h1>
            <Auth
                label="Email"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
            />
            <Auth
                label="Senha"
                tipo="password"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio
            />
        </div>
    )
}