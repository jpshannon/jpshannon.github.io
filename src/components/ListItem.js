import React from 'react';

import { faIcon } from './helpers'

export default function ListItem(props) {
	const { definition, url, text, icon, brand, ...other } = props;
	const Item = definition ? 'dd' : 'li';
	const iconName = faIcon(icon, brand);
	return (
		<Item {...other}>
			{iconName && (<i className={iconName}></i>)}
			{url ?
				(<a href={url}>{text}</a>)
				:
				(<span>{text}</span>)
			}
		</Item>
	)
}