import React from 'react';
import ListItem from './ListItem';

export default function Definitions(props) {
	return (
		<dl className={props.className}>
			<dt>{props.title}</dt>
			{props.level && <ListItem className="exp-level" text={props.level} />}
			{props.children}
		</dl>
	);
}