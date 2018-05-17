import React from 'react';

export default function Section (props) {
	return (
		<article className={props.className}>
			{props.header && (<header>{props.header}</header>)}
			{props.children}
			{props.footer && (<footer>{props.footer}</footer>)}
		</article>
	);
}