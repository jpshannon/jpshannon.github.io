import React from 'react';
import Container from './Container';

export default function ResumeLayout(props) {
	return (
		<Container>
			<main>
				{props.basics}
			</main>
			<aside>
				{props.contact}
				{props.skills}
				{props.education}
				{props.certifications}
			</aside>
			<article>
				{props.work}
				{props.volunteer}
				{props.awards}
				{props.publications}
				{props.languages}
				{props.interests}
				{props.references}
			</article>
		</Container>
	);
}