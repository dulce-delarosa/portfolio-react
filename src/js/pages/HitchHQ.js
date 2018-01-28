import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import MainNav from '../components/MainNav';

class HitchHQ extends Component {
  render() {
    return (
      <div className="hitch">
      	<div className="container">
          <MainNav />
	      	<div className="hitch__header">
	      		<div className="hitch__header__wrap">
			    		<h1>Hitchhq.com</h1>
			    		<span>Lead designer &amp; Frontend developer</span>
			    		<p>An API support platform that helps providers manage their conversations with developers from raising visibility of an API, to onboarding and ongoing engagement.</p>
		    		</div>
		    	</div>


		    	<div className="hitch__branding">
		    		<img className="hitch__branding__logo-img" alt="Hitch logo process" src={"images/hitch/hitch-logo-tiles.svg"} />
		    		<div className="hitch__branding__logo-description-wrap">
			    		<h3>The logo:</h3>
			    		<p>We needed a strong and iconic image that could embrace the message behind Hitch company. Trust and communication are keys to preserve wolf&#39;s pack.</p>
		    		</div>

		    		<div className="group hitch__branding__style">
		    			<div className="col hitch__branding__style__subtitle">
		    				<h2>Branding</h2>
		    			</div>

		    			<div className="col hitch__branding__style__font">
		    				<h3>The font</h3>
		    				<img className="hitch__branding__style__font__img" alt="Hitch font" src={"images/hitch/hitch-font.svg"} />
		    				<p>We choose the sans-serif font, Open Sans, for its simplicity and readable appearance. We liked its optimization for a different range of interfaces. And as a startup, we loved the open-source fact.</p>
		    			</div>

		    			<div className="col-sm hitch__branding__style__color pull-right">
		    				<div className="group">
                  <div className="col hide-lg">
                    <h3>The color:</h3>
                    <p>To have a strong presence in the technologic market and at the same time bring a sense of simplicity to our product, we mix bright and bold colors with a neutral palette.</p>
                  </div>
                  <div className="group responsive-list">
                    <ul className="hitch__branding__style__color__list left">
  			    					<li><img className="hitch__branding__style__color__list__img" alt="Hitch color palette" src={"images/hitch/hitch-color1.svg"} /></li>
  			    					<li><img className="hitch__branding__style__color__list__img" alt="Hitch color palette" src={"images/hitch/hitch-color3.svg"} /></li>
  			    					<li><img className="hitch__branding__style__color__list__img" alt="Hitch color palette" src={"images/hitch/hitch-color5.svg"} /></li>
  			    				</ul>
  			    				<ul className="hitch__branding__style__color__list right">
  			    					<li><img className="hitch__branding__style__color__list__img" alt="Hitch color palette" src={"images/hitch/hitch-color2.svg"} /></li>
  			    					<li><img className="hitch__branding__style__color__list__img" alt="Hitch color palette" src={"images/hitch/hitch-color4.svg"} /></li>
  			    					<li><img className="hitch__branding__style__color__list__img" alt="Hitch color palette" src={"images/hitch/hitch-color6.svg"} /></li>
  			    				</ul>
  			    			</div>
                </div>
                <div className="hide-sm">
  		    				<h3>The color:</h3>
  		    				<p>To have a strong presence in the technologic market and at the same time bring a sense of simplicity to our product, we mix bright and bold colors with a neutral palette.</p>
                </div>
              </div>
		    		</div>
		    	</div>


	    		<div className="group hitch__product">
            <div className="col hide-lg">
              <h3>The Product</h3>
              <p>We had in our hands a very technical and complex product, and for this reason, we needed to create something intuitive not just for developers but for any user that could benefit with our service.
  Therefore the challenge was to create the easiest and simple workflow that could provide real value and cero frustrations.
  Also, after doing some market research, we found out that most of the technical services (to call it in some way) were not that appealing, so a nice UI was the plus in our side :)</p>
              <p>
                <a className="link hitch__product__download" href="/downloads/HitchUIPatternLibrary.pdf" download>Download</a>
                our UI pattern library pdf.
              </p>
            </div>
	    			<div className="col-lg pull-left hitch__product__wrap">
		    			<img className="hitch__product__img1" alt="Hitch ad screenshot" src={"images/hitch/hitch-screenshot1.svg"} />
	    				<img className="hitch__product__img2" alt="Hitch user card screenshot" src={"images/hitch/hitch-screenshot2.svg"} />
	    				<img className="hitch__product__img3" alt="Hitch responsive screenshot" src={"images/hitch/hitch-screenshot3.jpg"} />
	    				<img className="hitch__product__img4" alt="Hitch platform screenshot" src={"images/hitch/hitch-screenshot4.svg"} />
	    				<img className="hitch__product__img5" alt="Hitch api card screenshot" src={"images/hitch/hitch-screenshot5.svg"} />
	    				<img className="hitch__product__img6" alt="Hitch user onboarding card screenshot" src={"images/hitch/hitch-screenshot6.svg"} />
	    			</div>
	    			<div className="col pull-right hide-sm">
	    				<h2>Product</h2>
	    				<p>We had in our hands a very technical and complex product, and for this reason, we needed to create something intuitive not just for developers but for any user that could benefit with our service.
Therefore the challenge was to create the easiest and simple workflow that could provide real value and cero frustrations.
Also, after doing some market research, we found out that most of the technical services (to call it in some way) were not that appealing, so a nice UI was the plus in our side :)</p>
              <p>
                <a className="link hitch__product__download" href="/downloads/HitchUIPatternLibrary.pdf" download>Download</a>
                our UI pattern library pdf.
              </p>
            </div>
	    		</div>
		    	<SocialMedia />
		    </div>
      </div>
    );
  }
}

export default HitchHQ;
