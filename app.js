// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()
// ********** close links ************
let linksContainer = document.querySelector('.links-container')
let links = document.querySelector('.links')
let navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', function () {

    // linksContainer.classList.add('show-links')
    let linkHeight = links.getBoundingClientRect().height
    let linkContainerHeight = linksContainer.getBoundingClientRect().height

    if (linkContainerHeight === 0) {
        linksContainer.style.height = `${linkHeight}px`
    }
    else {
        linksContainer.style.height = 0
    }


})

// ********** fixed navbar ************
const nav = document.getElementById('nav')

window.addEventListener('scroll', function () {

    let navHeight = nav.getBoundingClientRect().height
    let scrollHeight = window.pageYOffset

    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav')
    }
    else {
        nav.classList.remove('fixed-nav')
    }
}
)


// ********** smooth scroll ************
// select links












