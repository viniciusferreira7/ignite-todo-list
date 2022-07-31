import { PlusCircle } from 'phosphor-react'

import {
  AddTaskContainer,
  ButtonContainer,
  InputContainer,
} from './AddTask.styles'

export function AddTask() {
  return (
    <AddTaskContainer>
      <InputContainer type="text" placeholder="Adicione uma nova tarefa" />
      <ButtonContainer>
        Criar <PlusCircle size={16} />
      </ButtonContainer>
    </AddTaskContainer>
  )
}
