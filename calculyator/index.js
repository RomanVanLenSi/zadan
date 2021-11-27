const output = document.querySelector('output')
const div = document.createElement('div')
div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)

'7 8 9 / c 4 5 6 * ( 1 2 3 - ) 0 . + ='.split(' ')
.map(symbol =>{
    div.insertAdjacentHTML('beforeend', `<button value ="${symbol}">${symbol}</button>`)
})
document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', function {
        calc(this.value)
    })
})
document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+\(\)]) )
})