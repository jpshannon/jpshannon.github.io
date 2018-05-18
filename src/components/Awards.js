import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function Awards(props) {
	const section = props.resume.awards;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="awards" icon="medal" title="Awards">
			{section.map((item, idx) =>
				<SectionItem key={idx} title={item.title} subtile={item.awarder} startDate={item.date}>
					{item.summary}
				</SectionItem>
			)}
		</Section>
	)
}