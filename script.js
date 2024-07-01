function updateTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');

    const utcTimeString = `${hours}:${minutes} UTC`;
    document.getElementById('currentTimeUTC').textContent = utcTimeString;
}
function getUTCDayS(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date();
    const utcDay = day.getUTCDay();
    return daysOfWeek[utcDay];
}
function displayUTCDay(){
    const utcDayelement = document.getElementById('curentDay');
    const utcDayString = getUTCDayS();
    utcDayelement.textContent = utcDayString;
}

updateTime();
displayUTCDay();
setInterval(updateTime, displayUTCDay, 1000);