import React, { Component } from 'react';

class Contact extends Component {
	renderGithubIcon() {
		return (
			<div>
				<svg width="30px" height="30px" viewBox="0 0 68 68" fill="#000000">
		      <g>
		      	<path d="M34.0954609,67.5586727 C15.6385021,67.5586727 0.675086403,52.6065417 0.675086403,34.1635022 C0.675086403,15.7193494 15.6385021,0.768331572 34.0954609,0.768331572 C52.5524197,0.768331572 67.5158354,15.7193494 67.5158354,34.1635022 C67.5158354,52.6065417 52.5524197,67.5586727 34.0954609,67.5586727 L34.0954609,67.5586727 Z"></path>
		      </g>
          <g transform="translate(11.500000, 16.500000)">
          	<path fill="#FFFFFF" d="M32.5798943,-1.42108547e-14 C33.1600047,1.31739608 33.5358369,3.50545363 32.9750635,5.10745089 C35.2682351,7.06544755 36.0565903,11.825328 34.9494223,15.7150428 C38.2178735,15.9644407 42.1110591,15.5950542 44.6238793,16.5980998 C42.27468,16.2961449 39.066223,15.7036389 36.0362616,15.9099004 C35.462101,15.9490703 34.6117682,15.8880843 34.6534172,16.6957765 C38.1608541,16.9709571 41.6464749,17.2709287 44.5262026,18.169852 C41.6697785,17.7032846 38.2025031,16.9922774 34.6534172,16.8936091 C33.1872748,19.7867239 30.2366448,21.2087382 26.1634762,21.508214 C26.6012861,22.4611817 27.4397192,22.8236268 27.6444932,24.3562091 C27.9499189,26.64591 27.1665219,29.9991466 27.9395066,31.5252833 C28.3103807,32.2566191 28.9147863,32.2759561 29.3223511,32.9011862 C28.3247595,34.0817357 25.8516049,32.7683062 25.5699787,31.5252833 C25.0875449,29.3957326 26.3047852,26.0945571 24.9789602,24.6507267 C25.0721745,26.9736476 24.4295906,30.2356531 25.0776285,32.3106635 C25.3329763,33.1267847 26.0702619,33.441631 25.8674712,34.177925 C21.2305543,34.648459 23.1687181,28.176509 22.410608,24.3557133 C21.7110047,24.4057912 22.0184137,25.4033828 22.0159346,25.829293 C21.9961017,29.5598493 22.7794987,34.6767208 18.7583914,34.177925 C18.6408818,33.3935363 19.2978445,33.1272805 19.5482341,32.4113152 C20.2815531,30.3125054 19.4108917,27.1843714 19.7470582,24.6512226 C18.2124926,25.8084685 19.9082,29.8474254 18.9572156,31.9184692 C18.4093335,33.1104226 16.6437153,33.6290513 15.3045031,33.0970354 C15.4790321,32.2095161 16.3953091,32.3528083 16.7840326,31.5257791 C17.3274523,30.3734913 16.7879992,28.7124914 16.9818652,27.008355 C14.1413073,27.5755741 11.9378794,26.9260488 10.8594689,25.1420852 C10.3770352,24.3413345 10.2575424,23.3967957 9.67445703,22.687276 C9.0943466,21.9772605 8.16716155,21.8815671 7.89842663,20.9206663 C11.4162758,20.0738042 11.5511391,24.5411503 14.7105097,24.6512226 C15.6793437,24.6864258 16.1830977,24.3720754 17.0795419,24.1613515 C17.3304273,23.0348465 17.8674013,22.1944301 18.6592272,21.6063865 C14.7278634,21.0684209 11.4812283,19.8442391 9.97145374,16.8941049 C6.39757683,17.0696255 3.1271423,17.547101 0.0981725344,18.2680245 C2.84749932,17.2694413 6.23841832,16.9114586 9.8732812,16.7939491 C9.65908658,15.5067981 7.78141291,15.8608142 6.61573801,15.9103962 C4.44900076,16.0055939 1.72198592,16.2748246 0,16.5980998 C2.49596231,15.7081013 5.99844102,15.8191652 9.37993943,15.8122237 C8.34565707,12.5695552 8.70413557,7.41847202 10.9596248,5.50014103 C10.3205116,3.88921899 10.51884,1.25442683 11.3542982,-1.42108547e-14 C13.8725724,0.113047161 15.3997007,1.21129041 16.9818652,2.25945575 C18.9438284,1.70165726 21.0069391,1.42399757 23.6952799,1.57175219 C24.8257515,1.63422562 26.0013428,2.14244203 26.8531631,2.06211904 C27.6886213,1.98377934 28.6093607,1.04618206 29.4205236,0.688199383 C30.4771179,0.221631934 31.371083,0.0436322375 32.5798943,-1.42108547e-14"></path>
			   	</g>
				</svg>
			</div>
		);
	}

	renderLinkedinIcon() {
		return (
			<div>
				<svg width="30px" height="30px" viewBox="0 0 68 68" fill="#000000">
          <g>
            <path d="M34.0954609,67.5586727 C15.6385021,67.5586727 0.675086403,52.6065417 0.675086403,34.1635022 C0.675086403,15.7193494 15.6385021,0.768331572 34.0954609,0.768331572 C52.5524197,0.768331572 67.5158354,15.7193494 67.5158354,34.1635022 C67.5158354,52.6065417 52.5524197,67.5586727 34.0954609,67.5586727 L34.0954609,67.5586727 Z"></path>
            <polygon fill="#FFFFFF" points="17.9529421 48.5654705 25.1452761 48.5654705 25.1452761 26.9412242 17.9529421 26.9412242"></polygon>
            <path fill="#ffffff" d="M21.5485794,23.9898168 C24.0562027,23.9898168 25.6188323,22.3277976 25.6188323,20.2518614 C25.5722183,18.1314637 24.0562027,16.5170819 21.5962528,16.5170819 C19.136303,16.5170819 17.5270593,18.1304051 17.5270593,20.2518614 C17.5270593,22.3277976 19.0886295,23.9898168 21.5030247,23.9898168 L21.5485794,23.9898168 Z"></path>
            <path fill="#ffffff" d="M51.0828093,36.1670188 C51.0828093,29.524235 47.533786,26.4330909 42.8024613,26.4330909 C38.9843479,26.4330909 37.2734009,28.5323165 36.3199319,30.0048443 L36.3199319,26.9412242 L29.1265386,26.9412242 C29.2218854,28.9705814 29.1265386,48.5654705 29.1265386,48.5654705 L36.3199319,48.5654705 L36.3199319,36.4888366 C36.3199319,35.8441425 36.366546,35.1983898 36.5572398,34.7368354 C37.0763506,33.44533 38.2597115,32.1083043 40.2461051,32.1083043 C42.8501347,32.1083043 43.8904753,34.0910827 43.8904753,36.9969698 L43.8904753,48.5665292 L51.0828093,48.5665292 L51.0828093,36.1670188 Z"></path>
          </g>
				</svg>
			</div>
		);
	}

	renderTwitterIcon() {
		return (
			<div>
				<svg width="30px" height="30px" viewBox="0 0 68 68" fill="#000000">
			    <g transform="translate(-311.000000, -3292.000000)">
			     	<path d="M344.702113,3359.38609 C326.245154,3359.38609 311.281738,3344.43396 311.281738,3325.99092 C311.281738,3307.54677 326.245154,3292.59575 344.702113,3292.59575 C363.159071,3292.59575 378.122487,3307.54677 378.122487,3325.99092 C378.122487,3344.43396 363.159071,3359.38609 344.702113,3359.38609 M350.03652,3314.15115 C346.940687,3315.27681 344.984367,3318.18014 345.206595,3321.3575 L345.281066,3322.58356 L344.04226,3322.43355 C339.53504,3321.85832 335.596394,3319.90702 332.252327,3316.62807 L330.617529,3315.00159 L330.196713,3316.20285 C329.305435,3318.88057 329.875191,3321.70831 331.732218,3323.61 C332.72279,3324.66125 332.499379,3324.81125 330.791293,3324.18523 C330.196713,3323.98561 329.676604,3323.8356 329.626957,3323.91002 C329.454375,3324.08601 330.047773,3326.36214 330.518235,3327.26337 C331.162462,3328.51542 332.474556,3329.7403 333.911949,3330.46672 L335.125931,3331.04195 L333.68972,3331.06676 C332.303156,3331.06676 332.253509,3331.09156 332.40245,3331.61837 C332.897735,3333.24485 334.854056,3334.97172 337.033787,3335.72295 L338.569291,3336.24739 L337.232374,3337.04823 C335.25123,3338.20106 332.922559,3338.8507 330.593888,3338.89913 C329.478017,3338.92394 328.561915,3339.02434 328.561915,3339.09993 C328.561915,3339.34916 331.584459,3340.75003 333.342193,3341.30164 C338.617756,3342.92812 344.885073,3342.2265 349.59088,3339.44956 C352.934947,3337.47227 356.277831,3333.54368 357.839341,3329.73912 C358.682155,3327.7134 359.523786,3324.00924 359.523786,3322.23393 C359.523786,3321.08228 359.598257,3320.93228 360.984821,3319.55621 C361.802811,3318.75537 362.569972,3317.88012 362.718913,3317.62971 C362.967146,3317.1537 362.941141,3317.1537 361.678694,3317.57892 C359.573433,3318.33015 359.275552,3318.22975 360.316953,3317.10409 C361.084114,3316.30325 362.001398,3314.85159 362.001398,3314.42636 C362.001398,3314.35195 361.630229,3314.47597 361.208231,3314.70158 C360.762592,3314.95199 359.77202,3315.3276 359.0285,3315.55202 L357.691583,3315.97843 L356.477601,3315.1516 C355.808551,3314.70158 354.868808,3314.20076 354.37234,3314.05075 C353.108711,3313.70112 351.176032,3313.75073 350.03652,3314.15115"></path>
			    </g>
				</svg>
			</div>
		);
	}

	renderInstagramIcon() {
		return (
			<div>
				<svg width="30px" height="30px" viewBox="0 0 68 68" fill="#000000">
			    <g transform="translate(-418.000000, -3292.000000)">
			    	<path d="M418.88839,3325.99092 C418.88839,3307.54677 433.851806,3292.59575 452.308764,3292.59575 C470.765723,3292.59575 485.729139,3307.54677 485.729139,3325.99092 C485.729139,3344.43396 470.765723,3359.38609 452.308764,3359.38609 C433.851806,3359.38609 418.88839,3344.43396 418.88839,3325.99092 Z M464.092391,3340.70805 C464.245901,3340.68296 464.399411,3340.66077 464.550989,3340.62797 C465.753964,3340.37232 466.736812,3339.36995 466.972386,3338.16113 C466.996523,3338.02896 467.015832,3337.89775 467.037073,3337.76655 L467.037073,3314.21529 C467.016798,3314.08698 466.998454,3313.95674 466.974317,3313.82843 C466.715571,3312.50963 465.626522,3311.48604 464.290312,3311.30273 C464.234315,3311.29598 464.181214,3311.28344 464.126183,3311.27379 L440.49246,3311.27379 C440.350536,3311.29984 440.206681,3311.31914 440.066688,3311.35097 C438.761374,3311.64811 437.795904,3312.69775 437.609569,3314.01945 C437.601845,3314.07444 437.590259,3314.12943 437.58157,3314.18442 L437.58157,3337.79935 C437.608603,3337.94792 437.629844,3338.09939 437.663635,3338.24796 C437.95231,3339.52334 439.04136,3340.5122 440.337985,3340.6791 C440.399775,3340.68682 440.463496,3340.69936 440.526252,3340.70805 L464.092391,3340.70805 Z M440.767619,3323.20861 L440.767619,3323.28771 C440.767619,3327.64352 440.766653,3331.99933 440.767619,3336.35513 C440.767619,3336.98125 441.310213,3337.52054 441.937768,3337.52054 C448.850528,3337.52151 455.762322,3337.52151 462.675082,3337.52054 C463.30843,3337.52054 463.848128,3336.98318 463.848128,3336.35127 C463.849093,3332.00126 463.848128,3327.64931 463.848128,3323.30026 L463.848128,3323.20957 L461.036681,3323.20957 C461.433489,3324.47724 461.555138,3325.7671 461.399697,3327.08204 C461.244257,3328.39698 460.81945,3329.62028 460.12914,3330.75095 C459.438829,3331.88163 458.541908,3332.82032 457.446101,3333.56607 C454.603759,3335.50134 450.860635,3335.67113 447.843543,3333.97898 C446.319067,3333.12518 445.121885,3331.93372 444.285789,3330.39689 C443.041299,3328.10756 442.842412,3325.70343 443.572307,3323.20861 L440.767619,3323.20861 Z M452.308839,3320.02592 C449.041691,3320.02399 446.385685,3322.65099 446.340308,3325.90023 C446.293,3329.23824 448.966384,3331.88259 452.171742,3331.95109 C455.506473,3332.02248 458.203994,3329.3598 458.274473,3326.12116 C458.346884,3322.78315 455.651293,3320.02399 452.308839,3320.02592 L452.308839,3320.02592 Z M461.259704,3318.83061 L461.259704,3318.82482 C461.74437,3318.82482 462.230001,3318.83447 462.715632,3318.82289 C463.339325,3318.80746 463.847162,3318.27299 463.847162,3317.6488 L463.847162,3314.8607 C463.847162,3314.19406 463.31905,3313.66442 462.653842,3313.66346 C461.726026,3313.66346 460.79821,3313.66249 459.870394,3313.66346 C459.206151,3313.66442 458.677074,3314.19599 458.677074,3314.86263 C458.676109,3315.78396 458.673212,3316.70529 458.67997,3317.62661 C458.680936,3317.76457 458.707004,3317.90735 458.75045,3318.03759 C458.917476,3318.52768 459.367385,3318.82868 459.917702,3318.83157 C460.364714,3318.83157 460.812692,3318.83061 461.259704,3318.83061 L461.259704,3318.83061 Z"></path>
			    </g>
				</svg>
			</div>
		);
	}

  render() {
    return (
			<div className="home__social">
				<ul className="home__social__list">
					<li>
						<a href="https://github.com/dulce-delarosa" target="_blank">{this.renderGithubIcon()}</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/dulce-de-la-rosa-8b2ba5b/" target="_blank">{this.renderLinkedinIcon()}</a>
					</li>
					<li>
						<a href="https://twitter.com/DeLaR0sa" target="_blank">{this.renderTwitterIcon()}</a>
					</li>
					<li>
						<a href="https://www.instagram.com/dulcedelarosa/" target="_blank">{this.renderInstagramIcon()}</a>
					</li>
				</ul>
			</div>
    );
  }
}

export default Contact;
