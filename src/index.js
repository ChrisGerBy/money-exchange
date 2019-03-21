// PLEASE DON'T change function name
module.exports = 	function makeExchange(currency) {
	var result = {};
	if ((isNaN(currency) == true) ||(currency < 0)) {
		return result;
	} else {
		if (currency >= 0  && currency <= 10000 &&  currency !== undefined) {
		var coins = [50, 25, 10, 5, 1];
		var i=0; 
			var h = 0;
			while ((currency - coins[i]) >= 0) {				
				h++;
				currency = currency - coins[i];
			};
			if (h > 0) {
				result['H'] = h;
			};
		i++;
			var q = 0;
			while ((currency - coins[i]) >= 0) {				
				q++;
				currency = currency - coins[i];
			};
			if (q > 0) {
				result['Q'] = q;
			};
		i++;
			var d = 0;
			while ((currency - coins[i]) >= 0) {				
				d++;
				currency = currency - coins[i];
			};
			if (d > 0) {
				result['D'] = d;
			};
		i++;
			var n = 0;
			while ((currency - coins[i]) >= 0) {				
				n++;
				currency = currency - coins[i];
			};
			if (n > 0) {
				result['N'] = n;
			};
			if (currency > 0) {
				result['P'] = currency;
			} 
	} else {
		var message = "You are rich, my friend! We don't have so much coins for exchange";
		result['error'] = message;
		}
		return result;
	}
	
}