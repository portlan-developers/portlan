const images= document.querySelectorAll(".imgs"),
img = document.querySelectorAll('.img'),
imgstitle = document.querySelectorAll('.img-title'),
imgsdetail = document.querySelectorAll('.img-detail')


// addEventlisteners
slider()
function slider() {
    // the images is bg-img variables
    images.forEach((e, index)=>{
        e.addEventListener('mouseover',()=>{
            // e.target ==> images[index]
            e.classList.add('full')
    
            // img larg
            img[index].classList.add('full')
            // images box
            imgsdetail[index].classList.add('full')
            imgstitle[index].classList.add('full')
    
        })
        e.addEventListener('mouseout', ()=>{
            img[index].classList.remove('full')
            imgsdetail[index].classList.remove('full')
            imgstitle[index].classList.remove('full')
            e.classList.remove('full')
    
    
        })
    })
}







