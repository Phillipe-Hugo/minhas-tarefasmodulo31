import BotaoAdcionar from '../../components/BotaoAdcionar'
import BarraLateral from '../../containers/BarraLateral'
import ListadeTarefas from '../../containers/ListadeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListadeTarefas />
    <BotaoAdcionar />
  </>
)
export default Home
