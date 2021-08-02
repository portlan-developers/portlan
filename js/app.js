const header = document.querySelector('#header'),
navbar = document.querySelector('#navbar'),
links = document.querySelectorAll('.header__nav--item-link'),
logo = document.querySelector('.header__nav--item-link-2'),
about = document.querySelector('.header__nav--item-link-1')
lists = document.querySelector(".header__nav--list");


// bars menu

const barsmenu = document.querySelector('#bars-menu'),
barsBtn = document.querySelector('#bars-btn'),
baricon = document.querySelector('.fa-bars')


// events
barsBtn.addEventListener('click', function () {
    barsmenu.classList.toggle('hidden')
    baricon.classList.toggle('open-bars')
    document.body.classList.toggle('scroll')

    
})



// function
document.addEventListener('scroll', function (){
    if (window.scrollY < 80) {
        header.classList.remove('full_header');
        navbar.classList.remove('full_header');
        links.forEach((link)=>{
            link.classList.remove('full_header')
        })
        logo.classList.remove("full_header")
        about.classList.remove("full_header")
        lists.classList.remove("full_header")

    }else{

        about.classList.add("full_header")
        lists.classList.add("full_header")

        header.classList.add('full_header');
        navbar.classList.add('full_header');
        links.forEach((link)=>{
            link.classList.add('full_header')
        })
        logo.classList.add("full_header")
    }

})


