const timer = function (form, setBtn, startBtn, pauseBtn, resetBtn, div, seconds, minutes, hours) {

    const alarm = new Audio("assets/sound/joke_drum_effect.mp3")
    let timeOutId = null;

    this.draw = function () {
        form.style.display = "none";
        setBtn.style.display = "none";
        startBtn.style.display = "inline";
        pauseBtn.style.display = "inline";
        resetBtn.style.display = "inline";

        if (hours === 0 && minutes === 60) {
            div.innerHTML = "1 : 0 : 0" + seconds.toString();
        }

        else if (seconds === 60) {
            div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : 00";
        }
        else if (minutes === 60 && seconds === 60) {
            div.innerHTML = hours.toString() + " : 00" + " : 00";
        }
        else if (minutes === 60 ) {
            div.innerHTML = hours.toString() + " : 00" + " : " + seconds.toString();
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
                if (hours === 0 && minutes === 60) {
                    div.innerHTML = "1 : 0 : 0" + seconds.toString();
                }

                else if (seconds === 60) {
                    div.innerHTML = hours.toString() + " : 0" + minutes.toString() + " : 00";
                }
                else if (minutes === 60 && seconds === 60) {
                    div.innerHTML = hours.toString() + " : 00" + " : 00";
                }
                else if (minutes === 60 ) {
                    div.innerHTML = hours.toString() + " : 00" + " : " + seconds.toString();
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
            else{
                seconds = 0;
                minutes = 0;
                hours = 0;
                clearTimeout(timeOutId);
                startBtn.style.display = "none";
                pauseBtn.style.display = "none";
                div.innerHTML = "Fini !!";
                alarm.play()
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
            div.innerHTML = "";
            form.style.display = "inline";
            setBtn.style.display = "inline";
            startBtn.style.display = "none";
            pauseBtn.style.display = "none";
            resetBtn.style.display = "none";
        })
    }
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const count = document.querySelector("#countDiv");
const set = document.querySelector("#set");
const form = document.querySelector("#timerForm")

let userHours = document.querySelector("#hours");
let userMinutes = document.querySelector("#minutes");
let userSeconds = document.querySelector("#seconds");

set.addEventListener("click", () => {
    userHours = document.querySelector("#hours");
    userMinutes = document.querySelector("#minutes");
    userSeconds = document.querySelector("#seconds");
    if (userSeconds.value.length > 0) {
        if (userHours.value.length > 0 ){
            userHours = parseInt(document.querySelector("#hours").value);
        }
        else {
            userHours = 0;
        }

        if (userMinutes.value.length > 0 ) {
            userMinutes = parseInt(document.querySelector("#minutes").value);
        }
        else {
            userMinutes = 0;
        }

        userSeconds = parseInt(document.querySelector("#seconds").value);

        const testTimer = new timer(form, set, start, pause, stop, count, userSeconds, userMinutes, userHours);

        testTimer.draw()
        testTimer.setCountdown()
    }

})