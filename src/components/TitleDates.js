import React from 'react';
import Container from './Container';
import DateRange from './DateRange';

export default function TitleDates(props) {
	return (
		<Container>
			<h3>{props.children}</h3>
			{props.subtitle && <h4>{props.subtitle}</h4>}
			{props.startDate && <DateRange start={props.startDate} end={props.endDate} hideDateSpan={props.hidDateSpan} />}
		</Container>
	);
}