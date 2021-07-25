import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect, useState} from 'react'

import Header from './components/Header'
import Home from './components/Home'
import PieChart from './components/PieChart'
import DoughnutChart from './components/DoughnutChart'
import RadarChart from './components/RadarChart'
import BarGraphVertical from './components/BarGraphVertical';
import BarGraphHorizontal from './components/BarGraphHorizontal';

function App() {

  const [start, setStart] = useState(false)
  const setStart_fn = () => setStart(true)

  //single vars
  const [sv_graph_title, setSv_graph_title] = useState('')
  const sv_set_graph_title = (val) => setSv_graph_title(val)
  const [sv_no_of_val, setSv_no_of_val] = useState('')
  const sv_set_no_of_val = (val) => setSv_no_of_val(val)
  const [sv_values, setSv_values] = useState('')
  const sv_set_values = (val) => setSv_values(val)
  const [sv_labels, setSv_labels] = useState('')
  const sv_set_labels = (val) => setSv_labels(val)
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home 
              start={start} 
              setStart={setStart_fn}
              singleVar={
                [sv_graph_title, sv_set_graph_title, 
                sv_no_of_val, sv_set_no_of_val,
                sv_values, sv_set_values,
                sv_labels, sv_set_labels]
              }
            />
          </Route>
          <Route path='/piechart'>
            <PieChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route path='/doughnut'>
            <DoughnutChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route path='/radar'>
            <RadarChart/>
          </Route>
          <Route path='/linegraph'></Route>
          <Route exact path='/bargraph/vertical'>
            <BarGraphVertical/>
          </Route>
          <Route exact path='/bargraph/horizontal'>
            <BarGraphHorizontal/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
