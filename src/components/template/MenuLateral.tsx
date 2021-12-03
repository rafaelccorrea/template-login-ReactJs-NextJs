import MenuItem from './MenuItem';
import {Config, Home, PushNotif} from '../icons';

export default function MenuLateral(){
    return (
        <aside>
            <ul>
                <MenuItem url="/" text="inicio" icon={Home}/>
                <MenuItem url="/ajustes" text="Ajuste" icon={Config}/>
                <MenuItem url="/notificacoes" text="Notificacao" icon={PushNotif}/>
            </ul>
        </aside>
    )
}