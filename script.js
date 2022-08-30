const Switch = document.querySelector('.switch')
const state = document.querySelector('.state ')
const mode = document.querySelector('.mode')
const overview = document.querySelector('.overview')
const attribution = document.querySelector('.attribution')
const pages = document.querySelectorAll('.page')
const followers = document.querySelectorAll('.followers')
const h1s = document.querySelectorAll('h1')


Switch.addEventListener('click', () => {
    document.body.classList.toggle('body-light-mode')
    state.classList.toggle('state-light-mode')
    attribution.classList.toggle('attribution-light')
    Switch.classList.toggle('switch-light-mode')
    overview.classList.toggle('h1-light-mode')
    mode.classList.toggle('mode-light-mode')
    pages.forEach(page => {
        page.classList.toggle('page-light-mode')
    })
    followers.forEach(follower => {
        follower.classList.toggle('followers-light-mode')
    })
    h1s.forEach(h1 => {
        h1.classList.toggle('h1-light-mode')
        console.log(h1s)
    })
})