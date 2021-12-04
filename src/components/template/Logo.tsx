import Image from 'next/image'

export default function Logo() {

    return(
        <div className={`
            h-10 w-10 rounded-full
            bg-white
        `}>
            {/* <Image
                src={'logo.png'}
                alt={'Logo empresa'}
            /> */}
        </div>
    )
}