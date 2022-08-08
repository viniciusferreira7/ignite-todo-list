import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { MouseEventHandler, useState } from 'react'
import { TaskContainer } from './styles'

interface TaskProps {
  children: string
  handleCompleteTask: (checked: boolean) => void
  handleDeleteTask: (deleteTask: string) => MouseEventHandler<SVGSVGElement>
}

export function Task({
  children,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) {
  const [checked, setChecked] = useState(false)

  function handleChecked() {
    setChecked((checked) => !checked)
    handleCompleteTask(checked)
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
      <p>{children}</p>
      <Trash onClick={handleDeleteTask(children)} size={24} />
    </TaskContainer>
  )
}
