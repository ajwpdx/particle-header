
msgOne = "Hello World!   "
msgTwo = "Let's create cool things.   "
msgThree = "    "
msgFour = "Check out some of my work below   "


const texts = [msgOne, msgTwo, msgThree, msgFour]
const textsCreate = []

let count = 0
let index = 0
let currentText = ''
let letter = ''

function type(){

    if(count === texts.length){
        count = 0
    }

    currentText = texts[count]
    letter = currentText.slice(0, ++index)

    document.querySelector("#typewriter").textContent = letter
    if(letter.length === currentText.length){
        // setInterval(type, 2000)
        count++
        index = 0
    }
    setTimeout(type, 120)
}

setTimeout(type, 5000) 

