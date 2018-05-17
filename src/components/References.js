import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function References(props) {
	const section = props.resume.references;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<SectionItem className="references" icon="thumbs-up" title="References">
			{section.map((item,idx) =><Section key={idx} title={item.name}>{item.reference}</Section>)}
		</SectionItem>
	)
}