import React, { Component, PropTypes } from 'react';

class CompanyName extends Component {
	static propTypes = {
		name: PropTypes.string
	}

  render() {
    return (
			<span className="home__company__name">{this.props.children}</span>
    );
  }
}

export default CompanyName;
