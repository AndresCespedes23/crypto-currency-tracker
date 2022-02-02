import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./Components/Shared/Header"
import Homepage from "./Pages/Homepage"
import CoinsPage from "./Pages/CoinsPage";
import { makeStyles } from "@material-ui/core"
import './App.css';

function App() {
  
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/coins/:id' element={<CoinsPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
