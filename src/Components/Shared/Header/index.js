import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}))

const Header = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const darkTheme = createTheme({
      palette: {
          primary: {
              main: '#fff'
          },
          type: 'dark'
      }
  })

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography 
                    onClick={() => navigate("/") } 
                    className={classes.title}
                    variant='h6'
                    >
                        Crypto Tracker
                    </Typography>
                    <Select 
                        variant='outlined'
                        style={{
                            width:100,
                            height:100,
                            marginRight: 15,
                        }}>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'ESP'}>ESP</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
};

export default Header;
