export function removeSchema(url) {
	return url.replace(/^.*:\/\//i, '').replace(/\/$/, '')
}

export function faIcon(icon, brand = false) {
	if (!icon) {
		return null;
	}
	icon = icon.replace(/[^a-z0-9]/gi, '-').toLowerCase();
	return brand ? ['fab', icon] : ['fas', icon];
}