import React from 'react';
import Section from './Section';
import Experience from './Experience';

export default function Work(props) {
	if (!props.resume.work.length === 0) {
		return null;
	}
	return (
		<Section article className="work" icon="briefcase" title="Experience">
			{props.resume.work.map((item, idx) =>
				<Experience key={idx} title={item.position} subtile={item.company} startDate={item.startDate} endDate={item.endDate} highlights={item.highlights}>
				{item.summary}
				</Experience>
			)}
		</Section>
	)
}