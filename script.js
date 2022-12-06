const clockEl = document.querySelector(".clock");
const hourEl = clockEl.querySelector("#hour");
const minutesEl = clockEl.querySelector("#minutes");
const secondEl = clockEl.querySelector("#second");
const ampmEl = clockEl.querySelector("#ampm");

function timer () {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";
    
    if (hr > 12) {
        hr = hr - 12;
        ampm = "PM";
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hourEl.innerText = hr;
    minutesEl.innerText = min;
    secondEl.innerText = sec;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        timer();
    }, 1000);
}

timer();