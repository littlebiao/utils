
function debounceTail(func, delay, ctx) {
	let timer;
	return function() {
		const args = arguments;

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			func.apply(ctx, args)
		}, delay)

	}
}

function debounceStart(func, delay, ctx) {
	let timer;
	let immediate = true

	return function() {
		const args = arguments;

		if(immediate) {
			func.apply();
			immediate = false;
		}

		if (timer) {
			clearTimeout(timer);
			this.timer = setTimeout(() => {
				immediate = true
			}, delay)
		}
	}
}

module.exports = { debounceStart, debounceTail }
