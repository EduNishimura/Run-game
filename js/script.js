var dino = document.querySelector(".dino");

const jump = () => {
    console.log(dino);
    dino.classList.add('jump');

    setTimeout(()=>{
        dino.classList.remove('jump');
    },500);
}

document.addEventListener('keydown', jump); 