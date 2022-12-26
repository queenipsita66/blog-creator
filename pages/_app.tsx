import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { Provider } from 'react-redux';
import { store, wrapper } from '../store/store';


function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#512DA8",
      },
      secondary: {
        main: "#9575CD",
      },
    },
    typography: {
      fontFamily: [
        'Ubuntu', 'sans-serif',
      ].join(','),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (<Provider store={store}><ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider></Provider>)
}

export default wrapper.withRedux(App);