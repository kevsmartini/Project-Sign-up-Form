const btn = document.querySelector('button')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const hiddenText = document.querySelector('#hidden')

const onClick=()=>{

    if(password.value !== confirmPassword.value){
        hiddenText.style.display = 'block'
    }else{
        hiddenText.style.display = 'none'

    }
}

btn.addEventListener('click',onClick)

