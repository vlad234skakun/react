import './App.css'
import { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline, Typography, Container } from '@mui/material'
import styled from '@emotion/styled'

function App() {

  const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    background: {
      default: '#f5f5f5'
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9'
    },
    background: {
      default: '#121212'
    }
  }
})

// 🎨 Emotion: стилизованная кнопка
const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '20px',
  fontSize: '16px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}))

const [darkMode, setDarkMode] = useState(false)

  const handleToggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const theme = darkMode ? darkTheme : lightTheme

  
  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ textAlign: 'center', padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          {darkMode ? 'Темная тема' : 'Светлая тема'}
        </Typography>
        <StyledButton onClick={handleToggleTheme}>
          Переключить тему
        </StyledButton>
      </Container>
    </ThemeProvider>
  )
}

export default App
