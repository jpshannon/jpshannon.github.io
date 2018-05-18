import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function Certifications(props) {
	const section = props.resume.certifications;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="certifications" icon="certificate" title="Certifications">
			{section.map((item, idx) =>
				<SectionItem key={idx} title={item.title} subtile={item.awarder} startDate={item.date}>
					{item.summary}
				</SectionItem>
			)}
		</Section>
	)
}