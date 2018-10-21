import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyBussines from './CompanyBussines';

class Devex extends Component {
  render() {
    return (
      <div className="home__devex group">
        <span className="diagonal" />
        <a target="_blank" title="Devex detail page" href="https://www.devex.com/">
          <div className="home__company-details">
          <CompanyName>Devex</CompanyName>
          <CompanyBussines>Platform for the global<br/>development<br/>community</CompanyBussines>
          <CompanyRole>Product designer &amp; Frontend dev.</CompanyRole>
          <p>For this development community platform I redesigned the whole experience by changing the information architecture, the interface and the interaction.</p>
          <img className="home__company-details__arrow" src="images/arrow-link.svg" alt="Arrow" />
          </div>
          <img className="home__devex__img" alt="Devex homepage screenshot" src={"images/home-devex.png"} />
        </a>
      </div>
    );
  }
}

export default Devex;
