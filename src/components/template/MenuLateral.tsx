import MenuItem from './MenuItem';
import {Config, Home, Logout, PushNotif} from '../icons';
import Logo from './Logo';
import useAuth from '../../data/hook/useAuth';

export default function MenuLateral(){

    const {logout} = useAuth()

    return (
        <aside className={`
        flex flex-col
        dark:bg-gray-200 text-gray-700
        dark:bg-gray-900 
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-red-600 to-gray-700
                h-20 w-20
            `}>
                <Logo/>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" text="inicio" icon={Home}/>
                <MenuItem url="/ajustes" text="Ajuste" icon={Config}/>
                <MenuItem url="/notificacoes" text="Notificacao" icon={PushNotif}/>
            </ul>
            <ul>
                <MenuItem text="Sair" icon={Logout}
                OnClick={logout} 
                className={`
                    text-red-600 dark:text-red-500
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white
                `}
                />
            </ul>
        </aside>
    )
}