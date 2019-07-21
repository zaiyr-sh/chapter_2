/* TASK 06 */
setInterval(function() {
	$('#time').html(formatDate(new Date()));
}, 1000);

function formatDate(date) {
	var hour = '0' + date.getHours(),
		minute = '0' + date.getMinutes(),
		second = '0' + date.getSeconds();
	return [ hour.slice(-2), minute.slice(-2), second.slice(-2) ].join(':');
}

// var date = new Date();
// var myTime = setInterval(function(){
//     currentTime()
// }, 1000);
// function currentTime(){
//     var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//     console.log(time);
// }
