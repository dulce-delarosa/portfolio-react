import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyDescription from './CompanyDescription';

class Hitch extends Component {
  render() {
    return (
			<div className="home__hitch group">
				<span className="diagonal" />
				<img className="home__hitch__img" alt="HitchHQ homepage screenshot" src={"images/home-hitch.png"} />
				<div className="home__company home__hitch__company">
					<a className="home__company__mask" title="HitchHQ detail page" href="#/hitch">
						<div className="home__company__wrap">
							<CompanyRole>Lead designer  &amp; Frontend dev.</CompanyRole>
							<CompanyName>Hit<span>ch</span></CompanyName>
							<CompanyDescription>API platform</CompanyDescription>
						</div>
					</a>
				</div>
			</div>
    );
  }
}

export default Hitch;
