export function getCurrentDate(separator = '.') {
	const today = new Date();
	const yyyy = today.getFullYear();
	let mm: string | number = today.getMonth() + 1; // Months start at 0!
	let dd: string | number = today.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	return `${dd}${separator}${mm}${separator}${yyyy}`;
}
