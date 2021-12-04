import Link from 'next/link';

interface MenuItemProps {
    url?: string;
    text: string;
    className?: string;
    icon: any;
    OnClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps){
    function LinkRender(){
        return (
            <a className={`
                flex flex-col justify-center items-center 
                h-20 w-20 text-gray-600 ${props.className}`}>
                    {props.icon}
                    <span className={`
                        text-xs font-light
                    `}>
                        {props.text}
                    </span>
                </a>
        )
    }
    return (
        <li onClick={props.OnClick} className={`hover:bg-gray-100 cursor-pointer`}>
            {props.url ? (
                <Link href={props.url}> 
                    {LinkRender()}
                </Link>
            ): (
                LinkRender()
            )}

        </li>
    )
}