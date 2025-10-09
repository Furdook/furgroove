// biome-ignore lint/complexity/noStaticOnlyClass: because
class CountdownHelper {
	public static getTimeLeft(date: string) {
		const difference = +new Date(date) - +Date.now();

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return {};
	}
}

export default CountdownHelper;
