import React from 'react';
import Section from './Section';
import Experience from './Experience';

export default function Volunteer(props) {
	if (!props.resume.volunteer.length === 0) {
		return null;
	}
	return (
		<Section article className="volunteer" icon="hands-helping" title="Volunteer">
			{props.resume.volunteer.map((item, idx) =>
				<Experience key={idx} title={item.position} subtile={item.company} startDate={item.startDate} endDate={item.endDate} highlights={item.highlights}>
					{item.summary}
				</Experience>
			)}
		</Section>
	)
}