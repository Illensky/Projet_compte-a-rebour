const Countdown = function (countdownContainer) {

    const alarm = new Audio("assets/sound/joke_drum_effect.mp3");
    this.countdownContainer = countdownContainer;
    this.objectivDate =  null;

    this.createElem = function () {

        this.input = document.createElement("input");
        this.input.type = "datetime-local";

        this.valid = document.createElement("button");
        this.valid.innerHTML = "Valider";

        this.setDiv = document.createElement("div");
        this.setDiv.appendChild(this.input);
        this.setDiv.appendChild(this.valid);
        this.setDiv.style.textAlign = "center";

        this.countDownDiv = document.createElement("div");
        this.countDownDiv.style.textAlign = "center";

        this.countdownContainer.appendChild(this.setDiv);
        this.countdownContainer.appendChild(this.countDownDiv);
    }

    this.setCount = function () {
        this.valid.addEventListener("click", () => {
            this.objectivDate = this.input.value;
            this.objectiveDateFomatDate = new Date()
            this.objectiveDateFomatDate.setFullYear(parseInt(this.objectivDate.substring(0,4)));
            this.objectiveDateFomatDate.setMonth(parseInt(this.objectivDate.substring(5,7)));
            this.objectiveDateFomatDate.setDate(parseInt(this.objectivDate.substring(8,10)));
            this.objectiveDateFomatDate.setHours(parseInt(this.objectivDate.substring(11,13)));
            this.objectiveDateFomatDate.setMinutes(parseInt(this.objectivDate.substring(14,16)));

            this.actual = new Date();

            console.log((this.objectiveDateFomatDate.getTime()/1000) - this.actual.getTime())
            if (this.objectivDate.length === 16 && this.objectiveDateFomatDate.getTime() > this.actual.getTime()) {

                this.objectivDateYear = parseInt(this.objectivDate.substring(0,4));

                this.objectivDateMonth = parseInt(this.objectivDate.substring(5,7));

                this.objectivDateDay = parseInt(this.objectivDate.substring(8,10));

                this.objectivDateHour = parseInt(this.objectivDate.substring(11,13));

                this.objectivDateMin = parseInt(this.objectivDate.substring(14,16));

                this.inerval = setInterval(() => {
                    this.actual = new Date();

                    if ((this.objectivDateYear - this.actual.getFullYear()) >= 0) {
                        this.yearToDraw = (this.objectivDateYear - this.actual.getFullYear()).toString();
                    }
                    else {
                        this.yearToDraw = "0";
                    }

                    if (this.objectivDateMonth - (this.actual.getMonth() +1) >= 0) {
                        this.monthToDraw = (this.objectivDateMonth - (this.actual.getMonth() +1)).toString();
                    }
                    else {
                        this.monthToDraw = "0";
                    }

                    if (this.objectivDateDay - this.actual.getDate() >= 0) {
                        this.dayToDraw = (this.objectivDateDay - this.actual.getDate()).toString();
                    }
                    else {
                        this.dayToDraw = "0";
                    }

                    if (this.objectivDateHour - this.actual.getHours() >= 0) {
                        this.hourToDraw = (this.objectivDateHour - this.actual.getHours()).toString();
                    }
                    else {
                        this.hourToDraw = "0";
                    }

                    if (this.objectivDateMin - this.actual.getMinutes() >= 0) {
                        this.minToDraw = (this.objectivDateMin - this.actual.getMinutes()).toString();
                    }
                    else {
                        this.minToDraw = "0";
                    }


                    this.countDownDiv.innerHTML =
                        "Il reste " + this.yearToDraw + " ans, <br>" +
                        this.monthToDraw + " mois, <br>" +
                        this.dayToDraw + " jours, <br>" +
                        this.hourToDraw + " heures, <br>" +
                        "et " + this.minToDraw + " minutes avant la fin du compte à rebour.";

                        if (this.objectivDateYear - this.actual.getFullYear() === 0 && this.objectivDateMonth - (this.actual.getMonth() +1) === 0 &&
                            this.objectivDateDay - this.actual.getDate() === 0 && this.objectivDateHour - this.actual.getHours() === 0 &&
                            this.objectivDateMin - this.actual.getMinutes() === 0){
                            clearInterval(this.inerval);
                            this.countDownDiv.innerHTML = "Le compte à rebour est fini !!"
                            alarm.play();
                        }
                }, 1000)

            }
            else {
                this.countDownDiv.innerHTML = "Veuillez rentrer une date et une heure qui se trouve dans le futur."
            }

        })
    }

    this.draw = function () {
        this.createElem()
        this.setCount()
    }
}

const test = new Countdown(document.querySelector("body"))

test.draw()
