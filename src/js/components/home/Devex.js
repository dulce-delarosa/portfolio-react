import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyDescription from './CompanyDescription';

class Devex extends Component {
  render() {
    return (
			<div className="home__devex">
				<span className="diagonal home__devex__diagonal" />
				<div className="home__company home__devex__company">
					<a className="home__company__mask" target="_blank" href="https://www.devex.com/">
						<div className="home__company__wrap">
							<CompanyRole>Product designer & Frontend dev.</CompanyRole>
							<CompanyName>Devex</CompanyName>
							<CompanyDescription>Platform for the global<br/>development<br/>community</CompanyDescription>
						</div>
					</a>
				</div>
				<img className="home__devex__img" src={"/images/home-devex.png"} />
			</div>
    );
  }
}

export default Devex;
