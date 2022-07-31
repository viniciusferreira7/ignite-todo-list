import { ClipboardText } from 'phosphor-react'
import { ListEmptyContainer } from './ListEmpty.styles'

export function ListEmpty() {
  return (
    <ListEmptyContainer>
      <ClipboardText size={32} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </ListEmptyContainer>
  )
}
