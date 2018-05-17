import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import DateRange from './DateRange';
import Container from './Container';

export default function Education(props) {
	if (!props.resume.education.length === 0) {
		return null;
	}
	return (
		<Section article className="education" icon="tasks" title="Education">
			{props.resume.education.map((edu,idx) =>
				<Section
					key={idx}
					header={
						<Container>
							<h3>{edu.studyType} {edu.area}</h3>
							<h4>{edu.institution}</h4>
							<DateRange start={edu.startDate} end={edu.endDate} />
						</Container>
					}>
					{edu.courses.length > 0 && (
						<ul>
							{edu.course.map(course => <ListItem key={course} text={course} />)}
						</ul>
					)}
				</Section>
			)}
		</Section>
	)
}