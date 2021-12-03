import Title from './Title';

interface CabecalhoProps{
    title: string
    subtitle: string
}

export default function Cabecalho(props: CabecalhoProps){
    return (
        <div>
            <Title
            title={props.title}
            subtitle={props.subtitle}
            />
        </div>
    )
}