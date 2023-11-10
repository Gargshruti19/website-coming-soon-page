let countDowndate = new Date("Jan 01, 2024 00:00:00").getTime();

let day = document.getElementById("days");
let hour = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

let x = setInterval(function () {
	let now = new Date().getTime();
	let distance = countDowndate - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	day.innerHTML = days;
	hour.innerHTML = hours;
	min.innerHTML = minutes;
	sec.innerHTML = seconds;

	if (distance < 0) {
		clearInterval(x);
		day.innerHTML = "00";
		hour.innerHTML = "00";
		min.innerHTML = "00";
		sec.innerHTML = "00";
	}
}, 1000);
