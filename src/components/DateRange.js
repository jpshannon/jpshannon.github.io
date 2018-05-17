import React from 'react';
import Moment from 'react-moment';

export default function DateRange (props) {
	let format = "MMM YYYY";
	let dateSpan = !props.hideDateSpan && props.end ? <Moment className="date-span" diff={props.start}>{props.end}</Moment> : '';
	let end = props.end ? (<Moment className="end-date" format={format}>{props.end}</Moment>) : '';
	return (
		<div>
			<Moment className="start-date" format={format}>{props.start}</Moment>
			{end}
			{dateSpan}
		</div>
	)
}