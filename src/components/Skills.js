import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import ListItem from './ListItem';
import Definitions from './Definitions';

export default function Skills(props) {
	return (
		<Section header={<SectionTitle icon="tasks" title="Skills" />}>
			{props.resume.skills.map(skill =>
				<Definitions key={skill.name} title={skill.name} level={skill.level}>
					{skill.keywords.map(word=><ListItem definition text={word} key={word} />)}
				</Definitions>
			)}
		</Section>
	)
}