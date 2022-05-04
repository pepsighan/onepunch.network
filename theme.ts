import { createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const fontFamily = 'Inter, "Helvetica", "Arial", sans-serif';

export default createTheme({
  palette: {
    primary: deepOrange,
  },
  typography: {
    fontFamily,
    allVariants: { fontFamily },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: 'large',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});
