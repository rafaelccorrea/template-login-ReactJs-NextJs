import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import useData from '../../data/hook/useData';
import GuardAutenticacao from '../auth/guardAutenticacao';

interface LayoutProps{
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    const {tema} = useData()
    
    return (
        <GuardAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral/>
                <div className={`
                    flex w-full p-7 flex-col 
                    bg-gray-300 dark:bg-gray-800`
                    }>
                    <Cabecalho
                        title={props.title}
                        subtitle={props.subtitle}
                    />
                    <Conteudo>{props.children}</Conteudo>
                </div>
            </div>
        </GuardAutenticacao>
        
    )
}