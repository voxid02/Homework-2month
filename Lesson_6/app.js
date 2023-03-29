const textOne = document.querySelector(`.text`)
const vowels = [`а`, `и`, `у`, `ы`, `ю`, `я`]
function handletext (text) {
    return text.split(` `).map(word => {
        if(
            word.length > 8 ||
            (word.length > 2 && vowels.includes(word[0])) ||
            word.slice(-3) === `тся` || word.slice(-4) === `ться`
        ) {
            return`<span class="handlend">${word}</span>`
        }
        return word
    }).join(` `)
}
textOne.innerHTML = handletext(textOne.innerText)