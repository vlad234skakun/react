import { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';


//`AppBar`, `Toolbar`, `Typography`, `Button`, `Container`, 
// `Dialog`, `DialogActions`, `DialogContent`, `DialogContentText`, и `DialogTitle`.

import './App.css'

function App() {


  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '30px' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Добро Пожаловать в наше приложение
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen} >
          Открыть Диалоговое окно
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Использовать Material UI?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Это простое React приложение использует Material UI для создания интерфейса.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
            <Button onClick={handleClose} autoFocus>Согласен</Button>
          </DialogActions>
        </Dialog>


      </Container>


    </>
  )
}

export default App
