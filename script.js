function date() {
    let date = new Date().toLocaleString('fr', { weekday: 'short' }) + ' ' + new Date().toLocaleString('fr', { day: 'numeric' }) + ' ' + new Date().toLocaleString('fr', { month: 'short' }) + ' ' + new Date().toLocaleString('fr', { year: 'numeric' });
    document.getElementById('date').innerText = date;
}

function time() {
    let date = new Date();
    document.getElementById('time').innerText = date.toLocaleTimeString();
}

function dateTime() {
    date();
    time();
    setTimeout(dateTime, 1000);
}

dateTime();