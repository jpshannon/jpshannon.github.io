import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import Definitions from './Definitions';

export default function Skills(props) {
	if (!props.resume.skills.length) {
		return null;
	}
	return (
		<Section article className="skills" title="Skills" icon="tasks">
			{props.resume.skills.map(skill =>
				<Definitions key={skill.name} title={skill.name} level={skill.level}>
					{skill.keywords.map(word=><ListItem definition text={word} key={word} />)}
				</Definitions>
			)}
		</Section>
	)
}