const currentDay = document.getElementById("day");
const currentUTCTime = document.getElementById("time")

function getDateAndTime() {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const presentDay = weekdays[new Date().getDay()]

    currentDay.innerHTML = presentDay;

    const date = new Date()

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();

    const utcTime = `${hours}:${minutes}:${seconds}.${milliseconds}`

    currentUTCTime.innerHTML = utcTime;
}

window.addEventListener("load", getDateAndTime())