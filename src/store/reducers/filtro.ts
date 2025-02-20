import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.prioridade | enums.status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarCriterio: (
      state,
      action: PayloadAction<'prioridade' | 'status' | 'todas'>
    ) => {
      state.criterio = action.payload
    },
    alterarValor: (
      state,
      action: PayloadAction<enums.prioridade | enums.status>
    ) => {
      state.valor = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarCriterio, alterarValor, alterarFiltro } =
  filtroSlice.actions
export default filtroSlice.reducer
