import React from 'react';
import { faIcon } from './helpers';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function SectionTitle (props) {
	return (
		<h2>
			{props.icon && <FontAwesomeIcon icon={faIcon(props.icon)} /> }
			{props.title}
		</h2>
	);
}