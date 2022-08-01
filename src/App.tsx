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
  const [allTasks, setAllTasks] = useState(['dsfg'])

  function handleCreateTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function handleAddTask() {
    setAllTasks([...allTasks, task])
    setTask('')
  }

  const verifyTaskEmpty = allTasks.length !== 0
  const newTaskEmpty = task === ''

  console.log(verifyTaskEmpty)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AddTask
        handleCreateTask={handleCreateTask}
        handleAddTask={handleAddTask}
        newTaskEmpty={newTaskEmpty}
        task={task}
      />
      <TitleTask amountTasks={allTasks.length} />
      {verifyTaskEmpty ? <ListTask allTasks={allTasks} /> : <ListEmpty />}
      <GlobalStyle />
    </ThemeProvider>
  )
}
