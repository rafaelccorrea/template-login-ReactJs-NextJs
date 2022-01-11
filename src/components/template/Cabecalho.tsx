import Title from './Title';
import BotaoTema from './BotaoTema';
import useData from '../../data/hook/useData';
import AvatarUsuario from './AvatarUser'
interface CabecalhoProps{
    title: string
    subtitle: string
}

export default function Cabecalho(props: CabecalhoProps){

    const {tema, alternarTema} = useData()

    return (
        <div className={`flex`}>
            <Title
                title={props.title}
                subtitle={props.subtitle}
            />
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoTema 
                    tema={tema}
                    alternarTema={alternarTema}
                    />
                <AvatarUsuario className="ml-3"/>
            </div>
        </div>
    )
}