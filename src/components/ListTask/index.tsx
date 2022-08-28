import { Dispatch, SetStateAction } from 'react'
import { Task } from '../Task'
import { ListTaskContainer } from './ListTask.styles'

interface allTasksProps {
  allTasks: string[]
  handleCompleteTask: (checked: boolean) => void
  setAllTasks: Dispatch<SetStateAction<string[]>>
}

export function ListTask({
  allTasks,
  handleCompleteTask,
  setAllTasks,
}: allTasksProps) {
  return (
    <ListTaskContainer>
      <ol>
        {allTasks.map((item) => (
          <Task
            setAllTasks={setAllTasks}
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
