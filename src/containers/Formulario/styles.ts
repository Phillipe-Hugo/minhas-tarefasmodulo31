import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../components/Tarefa/styles'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  textarea {
    resize: none;
    margin: 16px 0;
  }
  font-size: 14px;
  font-weight: bold;
  color: #666666;
`
export const Opcoes = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 6px;
  }
  label {
    margin-right: 6px;
    margin-left: 6px;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
