import React, { Component } from 'react';
import './scss/resume.scss';

import ResumeLayout from './components/ResumeLayout';
import Awards from './components/Awards';
import Basic from './components/Basic';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Interests from './components/Interests';
import Languages from './components/Languages';
import Publications from './components/Publications';
import References from './components/References';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Work from './components/Work';

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faBeer, faLink, faUserTie, faBriefcase, faThumbsUp, faHandsHelping, faAddressCard, faTrophy, faCertificate,
		faEnvelope, faPhone, faUserGraduate, faComments, faBookOpen, faUserNinja } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, faBeer, faLink, faUserTie, faBriefcase, faThumbsUp, faHandsHelping, faAddressCard, faTrophy, faCertificate,
	faEnvelope, faPhone, faUserGraduate, faComments, faBookOpen, faUserNinja);

export default class Resume extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var beforePrint = function () {
			var pageHeights = {
				letter: 792,
				a4: 842
			}
			var html = document.querySelector('.page')
			var pageHeight = pageHeights[html.getAttribute('data-page-size').toLowerCase()];
			var height = html.scrollHeight;
			if (height / pageHeight !== 0) {
				html.style.height = (Math.ceil(height / pageHeight) * pageHeight) + 'px'
			}
		}
		var afterPrint = function () {
			var html = document.querySelector('.page');
			html.style.height = 'auto';
		}
		if (window.matchMedia) {
			var mediaQueryList = window.matchMedia('print');
			mediaQueryList.addListener(function (mql) {
				if (mql.matches) {
					beforePrint();
				} else {
					afterPrint();
				}
			});
		}
	}
	render() {
		const resume = this.props.jsonResume;
		return (
			<ResumeLayout
				basics={<Basic resume={resume}/>}
				contact={<Contact resume={resume} />}
				skills={<Skills resume={resume} />}
				education={<Education resume={resume} />}
				certifications={<Certifications resume={resume} />}
				work={<Work resume={resume} />}
				volunteer={<Volunteer resume={resume} />}
				awards={<Awards resume={resume} />}
				publications={<Publications resume={resume} />}
				languages={<Languages resume={resume} />}
				interests={<Interests resume={resume} />}
				references={<References resume={resume} />}

			/>
		);
	}
}
