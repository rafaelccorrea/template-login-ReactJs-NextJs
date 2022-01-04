import AuthModel from './auth.model'

export default function Auth(props: AuthModel){
    return props.renderizar ? null : (
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
            />
        </div>
    )
}