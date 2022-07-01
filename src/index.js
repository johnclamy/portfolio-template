import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import GlobalStyles from './assets/styles/global'
import theme from "./assets/styles/theme";

const root = document.getElementById('root')

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
  root
);
