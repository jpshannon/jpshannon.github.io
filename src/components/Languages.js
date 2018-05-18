import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import Definitions from './Definitions';

export default function Languages(props) {
	const section = props.resume.languages;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="languages" title="Languages" icon="comments">
			{section.map(item =>
				<Definitions key={item.name} title={item.name} level={item.level}>
				</Definitions>
			)}
		</Section>
	)
}