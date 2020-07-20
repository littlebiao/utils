function throttle(func, delay, ctx) {
	let isAvailable = true;
	let count = true;
	let timer;

	return function() {
		const args = arguments;

		count = true;

		if(isAvailable) {
			func.apply(ctx, args);
			isAvailable = false;
			count = false;

			setTimeout(function() { isAvailable = true }, delay); 
		}

		if (count) {
			clearTimeout(timer)

			timer = setTimeout(function() {
				func.apply(ctx, args)
			}, 2 * delay); // 防止连续触发两次
		}
	}
} 

