let boxes = document.querySelectorAll('.box');
let threshold = (window.innerHeight * 0.7);
console.log(threshold,window.innerHeight,'zam')

makeShow();

window.addEventListener('scroll',makeShow);


function makeShow(){

    boxes.forEach((box,idx,arr)=>{
        let boxTop = box.getBoundingClientRect().top;

        if(boxTop < threshold){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
 
        }
    })
}