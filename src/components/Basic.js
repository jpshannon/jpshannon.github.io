import React from 'react';
import Section from './Section';
import Container from './Container';
import Avatar from './Avatar';


export default function Basic(props) {
	const basics = props.resume.basics;
	if (!basics) {
		return null;
	}
	return (
		<Section article className="basics" header={
			<Container>
				<Avatar src={basics.picture} alt={basics.name} />
				<h1>{basics.name}</h1>
				<h2>{basics.label}</h2>
			</Container>
		}>
			{basics.summary.length > 0 && (
				<p className="summary">{basics.summary}</p>
			)}
		</Section>
	)
}