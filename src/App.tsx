import { ChangeEvent, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AddTask } from './components/AddTask'

import { Header } from './components/Header'
import { ListEmpty } from './components/ListEmpty'
import { ListTask } from './components/ListTask'
import { TitleTask } from './components/TitleTask'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState<string[]>([])
  const [amountChecked, setAmountChecked] = useState(0)

  function handleCreateTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function handleAddTask() {
    setAllTasks([...allTasks, task])
    setTask('')
  }

  function handleCompleteTask(checked: boolean) {
    checked
      ? setAmountChecked((amountChecked) => amountChecked - 1)
      : setAmountChecked((amountChecked) => amountChecked + 1)
  }

  const verifyTaskNotEmpty = allTasks.length !== 0
  const newTaskEmpty = task === ''
  const isListTaskEmptyOrNot = (
    <>
      {verifyTaskNotEmpty ? (
        <ListTask
          // handleDeleteTask={handleDeleteTask}
          setAllTasks={setAllTasks}
          handleCompleteTask={handleCompleteTask}
          allTasks={allTasks}
        />
      ) : (
        <ListEmpty />
      )}
    </>
  )

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AddTask
        handleCreateTask={handleCreateTask}
        handleAddTask={handleAddTask}
        newTaskEmpty={newTaskEmpty}
        task={task}
      />
      <TitleTask amountTasks={allTasks.length} amountChecked={amountChecked} />
      {isListTaskEmptyOrNot}
      <GlobalStyle />
    </ThemeProvider>
  )
}
