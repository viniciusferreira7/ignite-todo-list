import { TitleTaskContainer } from './TitleTask.styles'

interface titleTaskProps {
  amountTasks: number
  amountChecked: number
}

export function TitleTask({ amountTasks, amountChecked }: titleTaskProps) {
  return (
    <TitleTaskContainer>
      <h5>
        Tarefas criadas <span>{amountTasks}</span>
      </h5>
      <h5>
        Concluídas{' '}
        <span>
          {amountChecked} de {amountTasks}
        </span>
      </h5>
    </TitleTaskContainer>
  )
}
