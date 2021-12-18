import Title from './Title';
import BotaoTema from './botaoTema';
import useData from '../../data/hook/useData';
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
            <div className={`flex flex-grow justify-end`}>
                <BotaoTema 
                    tema={tema}
                    alternarTema={alternarTema}
                />
            </div>
        </div>
    )
}