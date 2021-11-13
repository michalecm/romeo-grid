export function formatDistance(distance) {
	let dist = Math.trunc(distance / 1000);
	return dist >= 1 ? dist + 'km' : Math.trunc(distance) + 'm';
}
