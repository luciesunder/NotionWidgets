const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        console.log(e.target.innerText)
        document.getElementById("operation").innerText += e.target.innerText
    })
}
