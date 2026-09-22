'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700', '800', '900'], style: ['normal', 'italic'] });

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4FF00', // Neon Yellow/Green
      contrastText: '#000000',
    },
    background: {
      default: '#050505',
      paper: '#111111',
    },
    divider: 'rgba(212, 255, 0, 0.2)', // Neon divider
    text: {
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontWeight: 900,
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontSize: '4.5rem',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    },
    h2: {
      fontWeight: 900,
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
      color: '#FFFFFF',
    },
    h3: {
      fontWeight: 800,
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontSize: '1.5rem',
      color: '#FFFFFF',
    },
    button: {
      fontWeight: 800,
      fontStyle: 'italic',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    body1: {
      color: '#A3A3A3',
      lineHeight: 1.6,
    },
    body2: {
      color: '#737373',
      lineHeight: 1.5,
    }
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          boxShadow: 'none',
          border: '2px solid transparent',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(212, 255, 0, 0.1)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.3s ease',
            zIndex: -1,
          },
          '&:hover::before': {
            transform: 'scaleX(1)',
          }
        },
        containedPrimary: {
          backgroundColor: '#D4FF00',
          color: '#000000',
          border: '2px solid #D4FF00',
          '&:hover': {
            backgroundColor: '#000000',
            color: '#D4FF00',
          }
        },
        outlined: {
          borderColor: '#D4FF00',
          color: '#D4FF00',
          '&:hover': {
            backgroundColor: '#D4FF00',
            color: '#000000',
          }
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0A0A0A',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderLeft: '4px solid #D4FF00',
        },
      },
    }
  },
});

export default theme;
