import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/tarefa'

interface TagProps {
  prioridade?: enums.prioridade
  status?: enums.status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.prioridade.URGENTE) {
      return variaveis.vermelho
    }
    if (props.prioridade === enums.prioridade.IMPORTANTE) {
      return variaveis.amarelo
    }
    if (props.prioridade === enums.prioridade.NORMAL) {
      return variaveis.cinzaescuro
    }
  } else {
    if (props.status === enums.status.PENDENTE) {
      return variaveis.vermelho
    }
    if (props.status === enums.status.EM_ANDAMENTO) {
      return variaveis.amarelo
    }
    if (props.status === enums.status.CONCLUIDA) {
      return variaveis.verde
    }
    if (props.status === enums.status.NAO_INICIADO) {
      return variaveis.cinzaescuro
    }
  }
  return variaveis.cinza
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-top: 16px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
