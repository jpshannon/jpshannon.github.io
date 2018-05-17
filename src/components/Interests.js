import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function References(props) {
	const section = props.resume.interests;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<SectionItem className="interests" icon="beer" title="Interests">
			{section.map((item, idx) => <Section key={idx} title={item.name} highlights={item.keywords}></Section>)}
		</SectionItem>
	)
}