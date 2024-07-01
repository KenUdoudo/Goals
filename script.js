function updateTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');

    const utcTimeString = `${hours}:${minutes} UTC`;
    document.getElementById('currentTimeUTC').textContent = utcTimeString;
    document.getElementById('curentDay').textContent = day;
}

updateTime();
setInterval(updateTime, 1000);