import { ThemeProvider } from 'styled-components'
import { AddTask } from './components/AddTask'

import { Header } from './components/Header'
import { ListEmpty } from './components/ListEmpty'
import { TitleTask } from './components/TitleTask'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AddTask />
      <TitleTask />
      {/* <ListTask /> */}
      <ListEmpty />
      <GlobalStyle />
    </ThemeProvider>
  )
}
