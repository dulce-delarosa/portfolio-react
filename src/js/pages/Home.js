import React, { Component } from 'react';
import '../../app.css';
import MainNav from '../components/MainNav';
import Header from '../components/home/Header';
import Hitch from '../components/home/Hitch';
import Devex from '../components/home/Devex';
import Others from '../components/home/Others';
import SocialMedia from '../components/SocialMedia';

class Home extends Component {
  render() {
    return (
      <div className="home">
      	<div className="container">
	      	<MainNav />
	        <Header />
	        <Hitch />
	        <Devex />
	        <Others />
	        <SocialMedia />
	      </div>
      </div>
    );
  }
}

export default Home;
