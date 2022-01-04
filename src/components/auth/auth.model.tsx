export default interface AuthProps {
    label: string;
    valor: any;
    obrigatorio?: boolean;
    renderizar?: boolean;
    valorMudou: (novoValor: any) => void;
    tipo?: 'text' | 'email' | 'password'
}