import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
			<div className="group home__header">
				<div className="col-md home__header__left">
					<div className="home__header__left__msg">
						<h1>I’m a hybrid designer and I code</h1>
					</div>
				</div>
				<div className="col-lg home__header__right">
					<span className="home__header__right__msg">Experience</span>
				</div>
			</div>
    );
  }
}

export default Header;
