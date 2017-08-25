import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyDescription from './CompanyDescription';

class Hitch extends Component {
  render() {
    return (
			<div className="home__hitch group">
				<span className="diagonal" />
				<img className="home__hitch__img" src={"/images/home-hitch.png"} />
				<div className="home__company home__hitch__company">
					<a className="home__company__mask" target="_blank" href="https://www.hitchhq.com/">
						<div className="home__company__wrap">
							<CompanyRole>Current job as Lead designer</CompanyRole>
							<CompanyName>Hitch</CompanyName>
							<CompanyDescription>API platform</CompanyDescription>
						</div>
					</a>
				</div>
			</div>
    );
  }
}

export default Hitch;
