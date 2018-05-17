import React from 'react';
import Section from './Section';
import Experience from './Experience';

export default function References(props) {
	if (props.resume.references.length === 0) {
		return null;
	}
	return (
		<Section className="references" icon="thumbs-up" title="References">
			{props.resume.references.map((item,idx) =><Section title={item.name}>{item.reference}</Section>)}
		</Section>
	)
}