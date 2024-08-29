const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");


function updateCountdown() {
    let countdownDate = new Date(2024, 8, 26, 19, 0, 0);
    let currentDate = new Date();
    let timeLeft = countdownDate - currentDate;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.textContent = daysLeft.toString().padStart(2, '0');
    hours.textContent = hoursLeft.toString().padStart(2, '0');
    minutes.textContent = minutesLeft.toString().padStart(2, '0');
    seconds.textContent = secondsLeft.toString().padStart(2, '0');
}

updateCountdown();
let updateTime = setInterval(updateCountdown, 1000)