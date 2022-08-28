import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { TaskContainer } from './styles'

interface TaskProps {
  children: string
  handleCompleteTask: (checked: boolean) => void
  setAllTasks: Dispatch<SetStateAction<string[]>>
}

export function Task({ children, handleCompleteTask, setAllTasks }: TaskProps) {
  const [checked, setChecked] = useState(false)

  function handleChecked() {
    setChecked((checked) => !checked)
    handleCompleteTask(checked)
  }

  function handleDeleteTask(): undefined {
    setAllTasks((allTasks) => allTasks.filter((task) => task !== children))
    if (checked) {
      handleCompleteTask(checked)
    }
    return undefined
  }

  const isCheckedOrNot = (
    <>
      {checked ? (
        <CheckCircle onClick={handleChecked} size={24} />
      ) : (
        <Circle onClick={handleChecked} size={24} />
      )}
    </>
  )

  return (
    <TaskContainer checked={checked}>
      {isCheckedOrNot}
      <div>
        <p>{children}</p>
      </div>
      <Trash onClick={handleDeleteTask} size={24} />
    </TaskContainer>
  )
}
