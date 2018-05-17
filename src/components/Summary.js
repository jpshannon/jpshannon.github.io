import React from 'react';
import Section from './Section';


export default function Basic(props) {
	const basics = props.resume.basics;
	if (!basics || !basics.summary) {
		return null;
	}
	return (
		<Section article className="summary" icon="user-tie" title="Summary">
			<p>{basics.summary}</p>
		</Section>
	)
}