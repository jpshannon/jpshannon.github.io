import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import Definitions from './Definitions';

export default function Skills(props) {
	const section = props.resume.skills;
	if (!Array.isArray(section) || section.length === 0) {
		return null;
	}
	return (
		<Section article className="skills" title="Skills" icon="user-ninja">
			{section.map(skill =>
				<Definitions className="tags" key={skill.name} title={skill.name} level={skill.level}>
					{skill.keywords.map(word=><ListItem definition text={word} key={word} />)}
				</Definitions>
			)}
		</Section>
	)
}