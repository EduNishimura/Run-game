const dino = document.querySelector('.dino');
const cacto = document.querySelector('.cactus');

const jump = () => {
    console.log(dino);
    dino.classList.add('jump');

    setTimeout(()=>{
        dino.classList.remove('jump');
    },500); 
}

const loop = setInterval(() => {
    
    const cactoPosition = cacto.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');
    
    console.log(dinoPosition);

    if(cactoPosition <= 170 && cactoPosition > 0  && dinoPosition < 60){
        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`;
    }

}, 10);

document.addEventListener('keydown', jump); 