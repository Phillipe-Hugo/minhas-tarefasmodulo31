import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar..."
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <div>
              <S.Filtros>
                <FiltroCard
                  valor={enums.status.PENDENTE}
                  criterio="status"
                  legenda="Pendentes"
                />
                <FiltroCard
                  valor={enums.status.CONCLUIDA}
                  criterio="status"
                  legenda="Concluídas"
                />
                <FiltroCard
                  valor={enums.prioridade.URGENTE}
                  criterio="prioridade"
                  legenda="Urgentes"
                />
                <FiltroCard
                  valor={enums.prioridade.IMPORTANTE}
                  criterio="prioridade"
                  legenda="Importantes"
                />
                <FiltroCard
                  valor={enums.prioridade.NORMAL}
                  criterio="prioridade"
                  legenda="Normal"
                />
                <FiltroCard criterio="todas" legenda="Todas" />
              </S.Filtros>
            </div>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
