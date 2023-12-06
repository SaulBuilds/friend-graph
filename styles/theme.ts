import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define light theme options
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    // Define other palette properties if needed
  },
  // You can also customize other theme aspects like typography, breakpoints, etc.
};

// Define dark theme options
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    // Define other palette properties if needed
  },
  // You can also customize other theme aspects like typography, breakpoints, etc.
};

// Create themes based on the options
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
