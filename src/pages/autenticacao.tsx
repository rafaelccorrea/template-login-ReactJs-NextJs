/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from 'next/image'
import Auth from "../components/auth/auth";
import { Warning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Authenticate(){

    const {cadastrar ,login, loginGoogle} = useAuth()

    const [ modo, setModo ] = useState<'login' | 'cadastro'>('login')
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ erro, setErro ] = useState(null)

    function Error(msg, time = 5){
        setErro(msg)
        setTimeout(() => setErro(null), time * 1000)
    }

    async function submeter(){
        try{

            if(modo === 'login'){
               await login(email, senha)
            }else{
               await cadastrar(email, senha)
            }
            
        }catch(e){
            Error(e?.message ?? "Ocorreu um erro!")
        }
    }

    return (

        <div className="flex h-screen items-center justify-center">

            <div className=" hidden md:block w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random" 
                     alt="Imagem da Tela de Autenticacao"
                     className="h-screen w-full object-cover"
                />
            </div>
        
        <div className="m-10 w-full md:w-1/2 lg:w-1/3">

            <h1 className={`
                text-2xl font-bold mb-5
            `}>
                {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se Ja'}
            </h1>

            {erro ? (
                <div className={`
                    flex items-center
                  bg-red-400 text-white py-3 px-5 my-2
                    border-2 border-red-700 rounded-lg
                `}>
                    {Warning(7)}
                    <span className="ml-3">{erro}</span>
                </div>
            ): false}

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

            <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className="my-6 botder-gray-300 w-full" />

            
            <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3
            `}>
                Entrar com Google
            </button>

            {modo === 'login' ? (
                <p className="mt-8">
                    Nao tem uma conta?
                    <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                    `}> Crie uma Conta Gratuitamente </a>
                </p>
            ):(
                <p className="mt-8">
                    Ja tem uma conta?
                <a onClick={() => setModo('login')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer
                `}> Entre com sua Conta </a>
            </p>
            )}

        </div>
        </div>
    )
}