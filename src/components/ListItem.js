import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faIcon } from './helpers'

export default function ListItem(props) {
	const { definition, url, text, icon, brand, ...other } = props;
	const Item = definition ? 'dd' : 'li';
	return (
		<Item {...other}>
			{props.icon && <span className="icon"><FontAwesomeIcon icon={faIcon(props.icon, brand)} /></span>}
			{url ?
				(<a href={url}>{text}</a>)
				:
				(<span>{text}</span>)
			}
		</Item>
	)
}