import React from 'react';
import SectionTitle from './SectionTitle';

export default function Section (props) {
	let header = props.header;
	if(!header && props.title) {
		header = <SectionTitle title={props.title} icon={props.icon} />
	}
	console.log("Title %s", props.title);
	console.log("Header %o", header);
	const SectionType = props.article ? 'article' : 'section';
	return (
		<SectionType className={props.className}>
			{header && (<header>{header}</header>)}
			{props.children}
			{props.footer && (<footer>{props.footer}</footer>)}
		</SectionType>
	);
}