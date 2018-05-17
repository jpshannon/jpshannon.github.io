import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import TitleDates from './TitleDates'

export default function Experience(props) {
	return (
		<Section
			header={<TitleDates subtitle={props.subtitle} startDate={props.startDate} endDate={props.endDate}>{props.title}</TitleDates>}>
			{props.children}
			{props.highlights.length > 0 && (
				<ul>
					{props.highlights.map((highlight,idx) => <ListItem key={idx} text={highlight} />)}
				</ul>
			)}
		</Section>
	)
}