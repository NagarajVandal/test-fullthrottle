import React, { useState } from 'react';
import './App.scss';
import
{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SimpleTable from './components/timetable/table/Table';
import CalendarData from './components/calendar/Calendar';
import { ThemeProvider, Paper, createMuiTheme } from '@material-ui/core';
import Navbar from './components/navbar';
import AllCards from './components/allCards/allCards';
import { grey } from '@material-ui/core/colors';


function App()
{

  const [darkMode, setDarkMode] = useState(true)




  const blackTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  })

  const whiteTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  })
  const changeDarkMode = () =>
  {
    setDarkMode(prevVal => !prevVal)
  }

  return (
    <Router>
      <ThemeProvider theme={darkMode ? blackTheme : whiteTheme}>
        <Paper className='app-paper' square>
          <div className="App">
            <Navbar modeSwitch={changeDarkMode} darkMode={darkMode} theme={darkMode ? blackTheme : whiteTheme} />
            <div className="content-div">
              <Route path='/' component={AllCards} exact></Route>
              <Route path='/calendar' component={CalendarData} exact></Route>
            </div>
          </div>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
