/* TASK 04 */
function myRange(x, y) {
	var arr;
	var first = x + 1;
	for (first; first < y; first++) {
		console.log((arr = first.toString().replace(/\D/g, '0').split('').map(Number)));
	}
}
myRange(2, 9);
