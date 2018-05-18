import React from 'react';
import Container from './Container';

export default function ResumeLayout(props) {
	return (
		<Container>
			<header>
				{props.basics}
			</header>
			<main role="main">
				<aside className="sidebar">
					{props.contact}
					{props.skills}
					{props.education}
					{props.certifications}
				</aside>
				<div className="content">
					{props.work}
					{props.volunteer}
					{props.awards}
					{props.publications}
					{props.languages}
					{props.interests}
					{props.references}
				</div>
			</main>
		</Container>
	);
}