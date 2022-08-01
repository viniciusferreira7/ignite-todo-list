import { Circle, Trash } from 'phosphor-react'
import { ListItemContainer, ListTaskContainer } from './ListTask.styles'

interface allTasksProps {
  allTasks: []
}

export function ListTask({ allTasks }: allTasksProps) {
  return (
    <ListTaskContainer>
      <ol>
        {allTasks.map((item) => (
          <ListItemContainer key={item}>
            <Circle size={24} />
            <p>{item}</p>
            <Trash size={24} />
          </ListItemContainer>
        ))}
      </ol>
    </ListTaskContainer>
  )
}
