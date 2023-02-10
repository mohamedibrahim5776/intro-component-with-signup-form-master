const imgs = document.images
const errors = document.getElementsByTagName('span')
const Inputs = document.getElementsByTagName('input')

console.log(Inputs[3])
function check () {
    if (first.value == '') {
        imgs[0].style.display = 'block'
        Inputs[0].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[1].style.display = 'block'
    }
    else {
        imgs[0].style.display = 'none'
        Inputs[0].style.border = ''
        errors[1].style.display = 'none'
    }
    if (last.value == '') {
        imgs[1].style.display = 'block'
        Inputs[1].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[2].style.display = 'block'
    }
    else {
        imgs[1].style.display = 'none'
        Inputs[1].style.border = ''
        errors[2].style.display = 'none'
    }
    if (email.value == '') {
        imgs[2].style.display = 'block'
        Inputs[2].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[3].style.display = 'block'
    }
    else {
        imgs[2].style.display = 'none'
        Inputs[2].style.border = ''
        errors[3].style.display = 'none'
    }
    if (pass.value == '') {
        imgs[3].style.display = 'block'
        Inputs[3].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[4].style.display = 'block'
    }
    else {
        imgs[3].style.display = 'none'
        Inputs[3].style.border = ''
        errors[4].style.display = 'none'
    }
}