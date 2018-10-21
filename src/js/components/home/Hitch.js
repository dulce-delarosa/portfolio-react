import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyBussines from './CompanyBussines';

class Hitch extends Component {
  render() {
    return (
			<div className="home__hitch group">
        <span className="diagonal" />
        <a href="#/hitch" title="HitchHQ detail page">
    			<img className="home__hitch__img" alt="HitchHQ homepage screenshot" src={"images/home-hitch.png"} />
    			<div className="home__company-details">
            <CompanyName>Hitch HQ</CompanyName>
            <CompanyBussines>API support platform</CompanyBussines>
            <CompanyRole>Lead designer</CompanyRole>
            <p>For this API support platform, my challenge was to translate a techy-complex tasks into intuitive solutions.
  <br />The design needed to respond efficiently and fast to our tech-savvy users, but also intuitive and frustration-free for the rest of the users that needed to use our tool.
            </p>
          </div>
        </a>
			</div>
    );
  }
}

export default Hitch;
