function start() {
    const currentTime = new Date();
    const timeStruct = {
        hour: String(currentTime.getHours()).padStart(2, 0),
        mins: String(currentTime.getMinutes()).padStart(2, 0),
        sec: String(currentTime.getSeconds()).padStart(2, 0),
    };

    document.getElementById("time-hour").innerHTML = timeStruct.hour;
    document.getElementById("time-minutes").innerHTML = timeStruct.mins;
    document.getElementById("time-seconds").innerHTML = timeStruct.sec;
    setTimeout(start, 999);
}

start();
