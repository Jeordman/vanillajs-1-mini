console.log('Hello World')

let count = 0

const counter = document.getElementById('counter')  

function increase() {
    count++
    counter.innerText = count
}

function decrease() {
    count--
    counter.innerText = count
}

function reset() {
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

function selectTheme(theme){
    document.getElementsByTagName('body')[0].className = theme //even if it is one item in the array we always have to have [0]
    document.getElementsByTagName('main')[0].classList = theme
    const buttons = document.getElementsByTagName('button')
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme //updates button to a specific theme
    }
}