import MenuItem from './MenuItem';
import {Config, Home, Logout, PushNotif} from '../icons';
import Logo from './Logo';

export default function MenuLateral(){
    return (
        <aside className={`flex flex-col`}>
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
                OnClick={() => console.log('text')} 
                className={`
                    text-red-600
                    hover:bg-red-400 hover:text-white
                `}
                />
            </ul>
        </aside>
    )
}