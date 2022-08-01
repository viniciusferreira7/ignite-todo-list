import { TitleTaskContainer } from './TitleTask.styles'

interface titleTaskProps {
  amountTasks: number
}

export function TitleTask({ amountTasks }: titleTaskProps) {
  return (
    <TitleTaskContainer>
      <h5>
        Tarefas criadas <span>{amountTasks}</span>
      </h5>
      <h5>
        Concluídas <span>2 de 5</span>
      </h5>
    </TitleTaskContainer>
  )
}
