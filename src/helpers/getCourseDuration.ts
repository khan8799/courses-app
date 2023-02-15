export function timeConvert(timeInMinutes: number): string {
	let hours: string | number = Math.floor(timeInMinutes / 60);
	if (hours < 10) hours = `0${hours}`;
	const minutes = timeInMinutes % 60;
	return `${hours}:${minutes} hours`;
}
