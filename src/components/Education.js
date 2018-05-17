import React from 'react';
import Section from './Section';
import Experience from './Experience';

export default function Education(props) {
	if (!props.resume.education.length === 0) {
		return null;
	}
	return (
		<Section article className="education" icon="tasks" title="Education">
			{props.resume.education.map((item,idx) =>
				<Experience key={idx} title={`${item.studyType} ${item.area}`} subtile={item.institution} startDate={item.startDate} endDate={item.endDate} highlights={item.courses} />
			)}
		</Section>
	)
}