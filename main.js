const header = document.querySelector('header')
header.className = 'header'

const logo = document.querySelector('h1')
logo.className = 'logo'

const header__content = document.getElementsByTagName('div')
header__content[1].className = 'header__content'

const header__menu = document.querySelector('menu')
header__menu.className = 'header__menu'

const header__menu_button = document.querySelector('button')
header__menu_button.className = 'header__menu-button'

const gallery = document.querySelector('section')
gallery.className = 'gallery'

const gallery__item = gallery.children
const list = Array.from(gallery__item)
list.forEach((div) => {
    div.className = 'gallery__item'
})

const gallery__item__image = document.querySelectorAll('img')
const imgList = Array.from(gallery__item__image)
imgList.forEach((img) => {
    img.className = 'gallery__item__image'
})

const gallery__item__text = document.querySelectorAll('h3')
const textList = Array.from(gallery__item__text)
textList.forEach((h3) => {
    h3.className = 'gallery__item__text'
})

const gallery__item__text_p = document.querySelectorAll('p')
const textListP = Array.from(gallery__item__text_p)
textListP.forEach((p) => {
    p.className = 'gallery__item__text'
})

const subscribe = document.getElementsByTagName('div')
subscribe[8].className = 'subscribe'

const subscribe__input = document.querySelector('input')
subscribe__input.className = 'subscribe__input'

const subscribe__button = document.getElementsByTagName('button')
subscribe__button[1].className = 'subscribe__button'

const subscribe__text = document.getElementsByTagName('p')
subscribe__text[6].className = 'subscribe__text'