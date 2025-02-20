import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

type Tarefa = {
  titulo: string
  prioridade: enums.prioridade
  status: enums.status
  descricao: string
  id: number
}

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState: {
    itens: [
      {
        titulo: 'Estudar Programação',
        prioridade: enums.prioridade.IMPORTANTE,
        status: enums.status.CONCLUIDA,
        descricao: '',
        id: 1
      },
      {
        titulo: 'Estudar Banco de Dados',
        prioridade: enums.prioridade.NORMAL,
        status: enums.status.CONCLUIDA,
        descricao: 'Tarefa finalizada com sucesso',
        id: 2
      },
      {
        titulo: 'Estudar Python',
        prioridade: enums.prioridade.URGENTE,
        status: enums.status.EM_ANDAMENTO,
        descricao: 'Processo de aprendizado em andamento',
        id: 3
      },
      {
        titulo: 'Estudar JavaScript',
        prioridade: enums.prioridade.IMPORTANTE,
        status: enums.status.PENDENTE,
        descricao: 'Tarefa pendente',
        id: 4
      },
      {
        titulo: 'Estudar React',
        prioridade: enums.prioridade.IMPORTANTE,
        status: enums.status.CONCLUIDA,
        descricao: 'Tarefa finalizada com sucesso',
        id: 5
      },
      {
        titulo: 'React para Cliente Neon',
        prioridade: enums.prioridade.IMPORTANTE,
        status: enums.status.NAO_INICIADO,
        descricao: 'Tarefa precisa ser iniciado com urgencia',
        id: 6
      }
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const TarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (TarefaJaExiste) {
        alert('Tarefa já existe')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.status.CONCLUIDA
          : enums.status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefaSlice.actions
export default tarefaSlice.reducer
