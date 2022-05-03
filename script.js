const nextButton=document.getElementById('next-button')
const buySelector=document.getElementById('buy-selector')
const btcOption=document.querySelector('.btc-option')
const ethOption=document.querySelector('.eth-option')
const selector=document.querySelector('.selector')
const priceOption=document.querySelectorAll('.price-option')
const priceOptions=document.querySelector('.price-options')
const confirmation=document.querySelector('.confirmation')
const dollarAmount=document.querySelector('.dollar-amount')
const subTitle=document.querySelector('.sub-title')
const confirmationButton=document.querySelectorAll('.confirmation-button')



btcOption.addEventListener('click', ()=> {
buySelector.classList.add('hidden')
priceOptions.classList.add('show')
subTitle.innerText='HOW MUCH WOULD YOU LIKE TO BUY?'
})
ethOption.addEventListener('click', ()=> {buySelector.classList.add('hidden')
priceOptions.classList.add('show')
subTitle.innerText='HOW MUCH WOULD YOU LIKE TO BUY?'})
priceOption.forEach(option=>option.addEventListener('click', ()=> {priceOptions.classList.remove('show')
    confirmation.classList.add('show')
    let innerText=option.innerText
    dollarAmount.innerText=innerText
    subTitle.innerText='CONFIRMATION'
}))

confirmationButton.forEach(button=>button.addEventListener('click', ()=>{
confirmation.classList.remove('show')
}))









