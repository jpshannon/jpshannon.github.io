import React from 'react';
import ListItem from './ListItem';
import Section from './Section';
import { removeSchema } from './helpers';

export default function Contact(props) {

	const basics = props.resume.basics;
	let items = [];

	if (basics.email) {
		items.push (<ListItem key="email" icon="envelope" url={`mailto: ${basics.email}`} text={basics.email} />);
	}
	if (basics.phone) {
		items.push(<ListItem key="phone" icon="phone" text={basics.phone} />);
	}
	if (basics.website) {
		items.push(<ListItem key="website" icon="link" url="{basics.website}" text={removeSchema(basics.website)} />);
	}

	if (basics.profiles.length > 0) {
		items = items.concat(basics.profiles.map(profile => <ListItem key={profile.url} icon={profile.network} url={profile.url} text={profile.username} brand />));
	}

	return (
		<Section article icon="address-book" title="Contact">
			<ul>
				{items}
			</ul>
		</Section>
	);
}