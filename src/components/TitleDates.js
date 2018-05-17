import React from 'react';
import Container from './Container';
import DateRange from './DateRange';
import { removeSchema } from './helpers';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function TitleDates(props) {
	return (
		<Container>
			<h3>{props.children}</h3>
			{props.subtitle && <h4>{props.subtitle} {props.url && <a href={props.url}><FontAwesomeIcon icon="link" />{removeSchema(props.url)}</a>}</h4>}
			{props.startDate && <DateRange start={props.startDate} end={props.endDate} hideDateSpan={props.hidDateSpan} />}
		</Container>
	);
}