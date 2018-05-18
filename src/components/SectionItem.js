import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import TitleDates from './TitleDates'

export default function SectionItem(props) {
	return (
		<Section
			className="detail"
			header={<TitleDates
				subtitle={props.subtitle}
				startDate={props.startDate}
				endDate={props.endDate}
				hideDateSpan={props.hideDateSpan}
				url={props.url}>{props.title}</TitleDates>}>
			{props.children}
			{Array.isArray(props.highlights) && props.highlights.length > 0 && (
				<ul>
					{props.highlights.map((highlight,idx) => <ListItem key={idx} text={highlight} />)}
				</ul>
			)}
		</Section>
	)
}