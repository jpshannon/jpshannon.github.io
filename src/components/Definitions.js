import React from 'react';

export default function Definitions(props) {
	return (
		<dl>
			<dt>{props.title}</dt>
			{props.children}
		</dl>
	);
}