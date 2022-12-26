import { addDecorator } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple, amber, lightBlue } from '@mui/material/colors';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#512DA8",
    },
    secondary: {
      main: "#9575CD",
    }
  },
  typography: {
    fontFamily: [
      'Ubuntu', 'sans-serif',
    ].join(','),
  }
});

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));