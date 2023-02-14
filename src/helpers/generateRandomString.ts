export function randomString(length = 10): string {
	return Math.random().toString(36).substr(2, length);
}
