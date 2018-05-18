import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function Work(props) {
	const section = props.resume.work;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="work" icon="briefcase" title="Experience">
			{section.map((item, idx) =>
				<SectionItem key={idx}
					title={item.position}
					subtitle={item.company}
					startDate={item.startDate}
					endDate={item.endDate}
					highlights={item.highlights}
					url={item.website}>
				{item.summary}
				</SectionItem>
			)}
		</Section>
	)
}