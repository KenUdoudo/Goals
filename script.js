function updateTime() {
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');

    const utcTimeString = `${hours}:${minutes} UTC`;
    document.getElementById('currentTimeUTC').textContent = utcTimeString;
}