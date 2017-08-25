import React from 'react';
import ReactDOM from 'react-dom';
import Home from './js/pages/Home';
import About from './js/pages/About';
import Contact from './js/pages/Contact';
import {HashRouter as HashRouter, Route, Link} from 'react-router-dom'

const Routes = () => (
  <HashRouter>
  	<div>
	    <Route exact path="/" component={Home}/>
	    <Route path="/about" component={About}/>
	    <Route path="/contact" component={Contact}/>
	    <footer>Dulce De La Rosa © Copyright 2017</footer>
	   </div>
  </HashRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
