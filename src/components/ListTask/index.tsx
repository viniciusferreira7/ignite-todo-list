import { MouseEventHandler } from 'react'
import { Task } from '../Task'
import { ListTaskContainer } from './ListTask.styles'

interface allTasksProps {
  allTasks: string[]
  handleCompleteTask: (checked: boolean) => void
  handleDeleteTask: (deleteTask: string) => MouseEventHandler<SVGSVGElement>
}

export function ListTask({
  allTasks,
  handleCompleteTask,
  handleDeleteTask,
}: allTasksProps) {
  return (
    <ListTaskContainer>
      <ol>
        {allTasks.map((item) => (
          <Task
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            key={item}
          >
            {item}
          </Task>
        ))}
      </ol>
    </ListTaskContainer>
  )
}
