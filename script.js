function date() {
    let date = new Date();
    if (window.innerWidth > 200) {
        date = new Date().toLocaleString('fr', { weekday: 'short' }) + ' ' + new Date().toLocaleString('fr', { day: 'numeric' }) + ' ' + new Date().toLocaleString('fr', { month: 'short' }) + ' ' + new Date().toLocaleString('fr', { year: 'numeric' });
    }
    else {
        date = new Date().toLocaleDateString();
    }
   
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