import React, { Component } from 'react';
import CompanyRole from './CompanyRole';
import CompanyName from './CompanyName';
import CompanyDescription from './CompanyDescription';

class Others extends Component {
  render() {
    return (
			<div className="home__others">
				<span className="home__others__title">...Other work</span>
				<ul className="home__others__list">
					<li className="home__others__list__item">
						<a className="home__others__list__item__target" target="_blank" href="https://novicap.com/">
							<img src={"/images/home-novicap.jpg"} />
							<div className="home__others__list__item__target__title">Novicap</div>
						</a>
					</li>
					<li className="home__others__list__item">
						<a className="home__others__list__item__target" target="_blank" href="http://silesia-vodka.com/">
							<img src={"/images/home-silesia.png"} />
							<div className="home__others__list__item__target__title">Silesia</div>
						</a>
					</li>
				</ul>
			</div>
    );
  }
}

export default Others;
