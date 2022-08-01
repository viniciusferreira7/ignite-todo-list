import { PlusCircle } from 'phosphor-react'
import { ChangeEvent } from 'react'

import {
  AddTaskContainer,
  ButtonContainer,
  InputContainer,
} from './AddTask.styles'

interface taskProps {
  handleCreateTask: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddTask: () => void
  newTaskEmpty: boolean
  task: string
}

export function AddTask({
  handleCreateTask,
  handleAddTask,
  newTaskEmpty,
  task,
}: taskProps) {
  return (
    <AddTaskContainer>
      <InputContainer
        onChange={handleCreateTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
      />
      <ButtonContainer onClick={handleAddTask} disabled={newTaskEmpty}>
        Criar <PlusCircle size={16} />
      </ButtonContainer>
    </AddTaskContainer>
  )
}
