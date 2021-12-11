const timer = function (startBtn, pauseBtn, resetBtn, div, seconds, minutes, hours) {

    let timeOutId = null;

    this.draw = function () {
        if (seconds === 60) {
            div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : 00";
        }
        else if (minutes === 60 ) {
            div.innerHTML = hours.toString() + " : 00" + " : " + seconds.toString();
        }
        else if (minutes === 60 && seconds === 60) {
            div.innerHTML = hours.toString() + " : 00" + " : 00";
        }
        else if (seconds.toString().length === 1 && minutes.toString().length > 1) {
            div.innerHTML = hours.toString() + " : " + minutes.toString() + " : 0" + seconds.toString();
        }
        else if (seconds.toString().length > 1 && minutes.toString().length === 1) {
            div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : " + seconds.toString();
        }
        else if (seconds.toString().length === 1 && minutes.toString().length === 1) {
            div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : 0" + seconds.toString();
        }
        else {
            div.innerHTML = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString();
        }
    }

    this.countdown = function () {
        timeOutId = setInterval(() => {
            if (seconds >= 0 && minutes >= 0 && hours >= 0) {
                if (seconds === 60) {
                    div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : 00";
                }
                else if (minutes === 60 ) {
                    div.innerHTML = hours.toString() + " : 00" + " : " + seconds.toString();
                }
                else if (minutes === 60 && seconds === 60) {
                    div.innerHTML = hours.toString() + " : 00" + " : 00";
                }
                else if (seconds.toString().length === 1 && minutes.toString().length > 1) {
                    div.innerHTML = hours.toString() + " : " + minutes.toString() + " : 0" + seconds.toString();
                }
                else if (seconds.toString().length > 1 && minutes.toString().length === 1) {
                    div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : " + seconds.toString();
                }
                else if (seconds.toString().length === 1 && minutes.toString().length === 1) {
                    div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : 0" + seconds.toString();
                }
                else {
                    div.innerHTML = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString();
                }
                seconds--;
                if (seconds === 0 && minutes > 0) {
                    seconds = 60;
                    minutes--;
                }
                if (minutes === 0 && hours > 0) {
                    hours--;
                    minutes = 60;
                }
            }
        }, 1000)
    }

    this.setCountdown = function () {
        startBtn.addEventListener("click", this.countdown)

        pauseBtn.addEventListener("click", () => clearTimeout(timeOutId))

        resetBtn.addEventListener("click", () => {
            seconds = 0;
            minutes = 0;
            hours = 0;
            clearTimeout(timeOutId)
            div.innerHTML = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString();
        })
    }
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const count = document.querySelector("#countDiv");
const set = document.querySelector("#set");

let userHours;
let userMinutes;
let userSeconds;

set.addEventListener("click", () => {
    userHours = parseInt(document.querySelector("#hours").value);
    userMinutes = parseInt(document.querySelector("#minutes").value);
    userSeconds = parseInt(document.querySelector("#seconds").value);

    const testTimer = new timer(start, pause, stop, count, userSeconds, userMinutes, userHours);

    testTimer.draw()
    testTimer.setCountdown()
})






