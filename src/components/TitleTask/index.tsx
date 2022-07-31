import { TitleTaskContainer } from './TitleTask.styles'

export function TitleTask() {
  return (
    <TitleTaskContainer>
      <h5>
        Tarefas criadas <span>5</span>
      </h5>
      <h5>
        Concluídas <span>2 de 5</span>
      </h5>
    </TitleTaskContainer>
  )
}
