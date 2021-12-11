const timer = function (startBtn, pauseBtn, resetBtn, div) {

    let seconds = 54;
    let minutes = 3;
    let hours = 0;

    this.countdown = function () {
        startBtn.addEventListener("click", () => {
            let timeOutId = setTimeout(function () {
                div.innerHTML = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString();
                if (seconds > 0) {
                    seconds--;
                    if (seconds === 0 && minutes > 0) {
                        seconds = 60;
                        minutes--;
                    }
                    if (minutes === 0 && hours > 0) {
                        hours--;
                        minutes = 60;
                    }
                    this.countdown;
                }
            }, 1000)


            pauseBtn.addEventListener("click", () => clearTimeout(timeOutId))
            resetBtn.addEventListener("click", () => {
                seconds = 0;
                minutes = 0;
                hours = 0;
                clearTimeout(timeOutId)
                div.innerHTML = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString();
            })
        })
    }
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const count = document.querySelector("#countDiv");

const testTimer = new timer(start, pause, stop, count);

testTimer.countdown()



