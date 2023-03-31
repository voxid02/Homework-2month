const start = document.querySelector(`.start`)
const stop = document.querySelector(`.stop`)
const image = document.querySelector(`.image`)
const result = document.querySelector(`h3`)

let s = Number(result.innerText);

start.onclick = () =>
{
    image.classList.add(`anime`)
    const time = setInterval(() =>
    {
        result.innerText = --s;
        if (s === 0) {
            clearInterval(time)
            result.innerText = 60
            s = 60
            start.removeAttribute(`disabled`)
            image.classList.remove(`anime`)
        }
    }, 1000);
    stop.onclick = () =>
    {
        image.classList.remove(`anime`)
        start.removeAttribute(`disabled`)
        clearInterval(time)
        stop.setAttribute(`disabled`,`disabled`)
    }
    start.setAttribute(`disabled`,`disabled`)
    stop.removeAttribute(`disabled`)
}

