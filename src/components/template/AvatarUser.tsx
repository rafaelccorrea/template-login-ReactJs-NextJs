/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarProps {
    className?: string;
}

export default function AvatarsUsuario(props: AvatarProps) {
    
    const {usuario} = useAuth()

    return(
        <Link href="/perfil">
            <img 
                src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
                alt="Avatar do Usuario"
                className={`
                    h-10 w-10 rounded-full cursor-pointer 
                    ${props.className}
                `}
            />
        </Link>
    )
}