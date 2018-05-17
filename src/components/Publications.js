import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function Publications(props) {
	const section = props.resume.publications;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="publications" icon="pushpin" title="Publications">
			{section.map((item, idx) =>
				<SectionItem key={idx} title={item.name} subtile={item.publisher} startDate={item.releaseDate} url={item.website}>
					{item.summary}
				</SectionItem>
			)}
		</Section>
	)
}