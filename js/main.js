//variables(inputs)
let one = document.querySelectorAll('input')[0]
let two = document.querySelectorAll('input')[1]
let three = document.querySelectorAll('input')[2]
let four = document.querySelectorAll('input')[3]
//variable(div)
let div = document.querySelector('div')
//variables(paragraphs)
let pone = document.querySelectorAll('p')[0]
let ptwo = document.querySelectorAll('p')[1]
let pthree = document.querySelectorAll('p')[2]
let pfour = document.querySelectorAll('p')[3]
//click events
one.onclick = () => {
    div.style.borderBottomLeftRadius = one.value + 'px'
    pfour.textContent = one.value + 'px'
}
two.onclick = () => {
    div.style.borderTopLeftRadius = two.value + 'px'
    pone.textContent = two.value + 'px'
}
three.onclick = () => {
    div.style.borderBottomRightRadius = three.value + 'px'
    pthree.textContent = three.value + 'px'
}
four.onclick = () => {
    div.style.borderTopRightRadius = four.value + 'px'
    ptwo.textContent = four.value + 'px'
}
//copy the value to the clipboard
document.querySelectorAll('p').forEach((e) => {
    e.onclick = (x) => {
        navigator.clipboard.writeText(e.textContent)
        alert('copied to the clipboard')
    }
})