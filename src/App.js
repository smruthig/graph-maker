import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react'

import Header from './components/Header'
import Home from './components/Home'

function App() {

  const [start, setStart] = useState(false)
  const setStart_fn = () => setStart(true)

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home start={start} setStart={setStart_fn}/>
          </Route>
          <Route path='/piechart'></Route>
          <Route path='/linegraph'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
