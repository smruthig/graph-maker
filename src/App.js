import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/piechart'></Route>
          <Route path='/linegraph'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
