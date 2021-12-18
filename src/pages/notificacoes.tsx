import Layout from '../components/template/Layout'
import useData from '../data/hook/useData'

export default function Notificacoes() {

  const {alternarTema} = useData()

  return (
    <Layout
      title="Notificacoes" subtitle="Aqui estao as novidades"
    >
    </Layout>
  )
}