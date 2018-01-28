import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyDescription from './CompanyDescription';

class Hitch extends Component {
  render() {
    return (
			<div className="home__hitch group">
        <a href="#/hitch" title="HitchHQ detail page">
    			<span className="diagonal" />
    			<img className="home__hitch__img" alt="HitchHQ homepage screenshot" src={"images/home-hitch.png"} />
    			<div className="home__company home__hitch__company">
    				<a className="home__company__mask">
    					<div className="home__company__wrap">
                // <embed type="image/svg+xml" src="images/arrow-link-animation.svg" />
    						<CompanyRole>Lead designer  &amp; Frontend dev.</CompanyRole>
    						<CompanyName>Hit<span>ch</span></CompanyName>
    						<CompanyDescription>API platform</CompanyDescription>
    					</div>
    				</a>
    			</div>
        </a>
			</div>
    );
  }
}

export default Hitch;
