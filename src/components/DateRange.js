import React from 'react';
import Moment from 'react-moment';

export default function DateRange (props) {
	const format = "MMM YYYY";
	const dateSpan = !props.hideDateSpan && props.end ? <Moment className="date-span" from={props.end} ago>{props.start}</Moment> : '';
	const end = props.end ? (<Moment className="end-date" format={format}>{props.end}</Moment>) : <time>Present</time>;
	const divider = ' - ';
	return (
		<div>
			<Moment className="start-date" format={format}>{props.start}</Moment>
			{divider} {end}
			{dateSpan}
		</div>
	);
}