import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function Volunteer(props) {
	const section = props.resume.volunteer;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="volunteer" icon="hands-helping" title="Volunteer">
			{section.map((item, idx) =>
				<SectionItem key={idx}
					title={item.position}
					subtitle={item.organization}
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