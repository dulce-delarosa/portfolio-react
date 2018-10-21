import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyBussines from './CompanyBussines';

class Devex extends Component {
  render() {
    return (
			<div className="home__devex">
        <a target="_blank" title="Devex detail page" href="https://www.devex.com/">
  				<span className="diagonal home__devex__diagonal" />
  				<div className="home__company home__devex__company">
  					<a className="home__company__mask">
  						<div className="home__company__wrap">
                <embed className="home__company__arrow" type="image/svg+xml" src="images/arrow-link-animation.svg" />
  							<CompanyRole>Product designer &amp; Frontend dev.</CompanyRole>
  							<CompanyName>Dev<span>ex</span></CompanyName>
  							<CompanyBussines>Platform for the global<br/>development<br/>community</CompanyBussines>
  						</div>
  					</a>
  				</div>
  				<img className="home__devex__img" alt="Devex homepage screenshot" src={"images/home-devex.png"} />
        </a>
			</div>
    );
  }
}

export default Devex;
