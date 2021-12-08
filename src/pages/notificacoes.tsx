import Layout from '../components/template/Layout'
import useData from '../data/hook/useData'

export default function Notificacoes() {

  const context = useData()

  return (
    <Layout
      title="Notificacoes" subtitle="Aqui estao as novidades"
    >
      <h3>{context.nome}</h3>
    </Layout>
  )
}