import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { Input } from './components/Input';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Input />
      <GlobalStyle />
    </ThemeProvider>
  )
}
