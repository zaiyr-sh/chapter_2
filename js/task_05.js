/* TASK 05 */
function Fibonacci(number) {
	var first = 0;
	var second = 1;
	var fibo = 0;

	for (var i = 1; i < number; i++) {
		fibo = first + second;
		first = second;
		second = fibo;
		console.log(fibo);
	}
}
Fibonacci(7);
