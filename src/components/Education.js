import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

export default function Education(props) {
	const section = props.resume.education;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="education" icon="user-graduate" title="Education">
			{section.map((item,idx) =>
				<SectionItem key={idx} title={`${item.studyType} ${item.area}`} subtile={item.institution} startDate={item.startDate} endDate={item.endDate} highlights={item.courses} />
			)}
		</Section>
	)
}