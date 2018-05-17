import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { faIcon, removeSchema } from './helpers';

function Item(props) {
	const icon = faIcon(props.icon, props.brand);

	return (
		<li>
			{icon && (<i className={icon}></i>)}
			{props.url ?
				(<a href={props.url}>{props.text}</a>)
				:
				(<span>{props.text}</span>)
			}
		</li>
	)
}

export default function Contact(props) {

	const basics = props.resume.basics;
	let items = [];

	if (basics.email) {
		items.push (<Item key="email" icon="envelope" url="mailto:{basics.email}" text={basics.email} />);
	}
	if (basics.phone) {
		items.push(<Item key="phone" icon="phone" text={basics.phone} />);
	}
	if (basics.website) {
		items.push(<Item key="website" icon="link" url="{basics.website}" text={removeSchema(basics.website)} />);
	}

	if (basics.profiles.length > 0) {
		items = items.concat(basics.profiles.map(profile => <Item key={profile.url} icon={profile.network} url={profile.url} text={profile.username} brand />));
	}

	return (
		<Section
			header={ <SectionTitle icon="phone" title="Contact" /> }>
			<ul>
				{items}
			</ul>
		</Section>
	);
}