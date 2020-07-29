import React from 'react';
/*eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to = '/'>Home</Link>
            </li>
          <li><Link to ='/about/Accolite'>About</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
          <Switch>
  <Route exact path = '/' component = {Home}/>
  <Route exact path = '/about/company' component = {About}/>
  <Route exact path = '/contact' component = {Contact}/>
          </Switch>
        </ul>
      </header>
    </div>
    </Router>
  );
}

export default App;
