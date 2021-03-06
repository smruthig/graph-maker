import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './css/Chart.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react'

import Header from './components/Header'
import Home from './components/Home'
import PieChart from './components/PieChart'
import PolarChart from './components/PolarChart'
import DoughnutChart from './components/DoughnutChart'
import RadarChart from './components/RadarChart'
import BarGraph from './components/BarGraph';
import BarGraphGrouped from './components/BarGraphGrouped';
import LineChart from './components/LineChart';
import ScatterPlot from './components/ScatterPlot';
import LineChart_2 from './components/LineChart_2';

function App() {

  const [start, setStart] = useState(false)
  const setStart_fn = () => setStart(true)
  const [lastUpdated, setLastUpdated] = useState('')
  const setLastUpdated_fn = (name) => setLastUpdated(name)

  //single vars
  const [sv_graph_title, setSv_graph_title] = useState('')
  const sv_set_graph_title = (val) => setSv_graph_title(val)
  const [sv_no_of_val, setSv_no_of_val] = useState('')
  const sv_set_no_of_val = (val) => setSv_no_of_val(val)
  const [sv_values, setSv_values] = useState('')
  const sv_set_values = (val) => setSv_values(val)
  const [sv_labels, setSv_labels] = useState('')
  const sv_set_labels = (val) => setSv_labels(val)

  //two vars
  const [tv_graph_title, setTv_graph_title] = useState('')
  const tv_set_graph_title = (val) => setTv_graph_title(val)
  const [tv_no_of_val, setTv_no_of_val] = useState('')
  const tv_set_no_of_val = (val) => setTv_no_of_val(val)
  const [tv_values_x, setTv_values_x] = useState('')
  const tv_set_values_x = (val) => setTv_values_x(val)
  const [tv_values_y, setTv_values_y] = useState('')
  const tv_set_values_y = (val) => setTv_values_y(val)

  //multi var
  const [mv_no_of_sets, setMv_no_of_sets] = useState(0)
  const mv_set_no_of_sets = () => setMv_no_of_sets(mv_no_of_sets + 1)
  const [mv_no_of_val, setMv_no_of_val] = useState('')
  const mv_set_no_of_val = (n) => setMv_no_of_val(n)
  const [mv_val, setMv_Val] = useState([])
  const mv_set_val = (arr) => setMv_Val([...mv_val, arr])
  const mv_edit_val = (arr) => setMv_Val(arr)
  
  const [mv_label, setMv_Label] = useState([])
  const mv_set_label = (arr) => setMv_Label(arr)
  const [mv_title, setMv_Title] = useState('')
  const mv_set_title = (t) => setMv_Title(t)
  const [mv_data_title, setMv_data_title] = useState([])
  const mv_set_data_title = (t) => setMv_data_title([...mv_data_title,t])
  const clear = () => {
    setMv_no_of_sets(0)
    setMv_no_of_val('')
    setMv_Val([])
    setMv_Label([])
    setMv_Title('')
    setMv_data_title([])
  }
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home 
              start={start} 
              setStart={setStart_fn}
              setLastUpdated = {setLastUpdated_fn}
              singleVar={
                [sv_graph_title, sv_set_graph_title, 
                sv_no_of_val, sv_set_no_of_val,
                sv_values, sv_set_values,
                sv_labels, sv_set_labels]
              }
              twoVar={
                [tv_graph_title, tv_set_graph_title, 
                tv_no_of_val, tv_set_no_of_val,
                tv_values_x, tv_set_values_x,
                tv_values_y, tv_set_values_y]
              }
            />
          </Route>
          <Route path='/piechart'>
            <PieChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route path='/doughnut'>
            <DoughnutChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route path='/polarchart'>
            <PolarChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route path='/radar'>
            <RadarChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route path='/linechart'>
            {lastUpdated === 'singleVar' ?
              <LineChart label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
            :
              <LineChart_2 values_x={tv_values_x} title={tv_graph_title} values_y={tv_values_y} no_of_val={tv_no_of_val}/>
            }
          </Route>
          <Route path='/scatterplot'>
            <ScatterPlot values_x={tv_values_x} title={tv_graph_title} values_y={tv_values_y} no_of_val={tv_no_of_val}/>
          </Route>
          <Route exact path='/bargraph/vertical'>
            <BarGraph axis='x' label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route exact path='/bargraph/horizontal'>
            <BarGraph axis='y' label={sv_labels} title={sv_graph_title} values={sv_values} no_of_val={sv_no_of_val}/>
          </Route>
          <Route exact path='/bargraph/grouped'>
            <BarGraphGrouped
              mv_no_of_sets = {mv_no_of_sets}
              mv_set_no_of_sets = {mv_set_no_of_sets}
              mv_no_of_val = {mv_no_of_val}
              mv_set_no_of_val = {mv_set_no_of_val}
              mv_val = {mv_val}
              mv_set_val = {mv_set_val}
              mv_edit_val = {mv_edit_val}
              mv_label = {mv_label}
              mv_set_label={mv_set_label}
              mv_title = {mv_title}
              mv_set_title = {mv_set_title}
              mv_data_title = {mv_data_title}
              mv_set_data_title = {mv_set_data_title}
              clearall={clear}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
