import { ThemeProvider } from 'styled-components';
import { AddTask } from './components/AddTask';

import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AddTask/>
      <GlobalStyle />
    </ThemeProvider>
  )
}