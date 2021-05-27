const spnCursor = document.querySelector('.cursor');
const spnText = document.querySelector('.text');

const txt = ['Cześć tu Kuba', 'Jak się masz?', 'Mam nadzieję, że dobrze!']
let textIndex = 0;
let letterIndex = -15;

function addLetters(){

    if(letterIndex >= 0){
    spnText.textContent += txt[textIndex][letterIndex];
}
    letterIndex++;
    if(letterIndex === txt[textIndex].length){
        textIndex++;
        if(textIndex === txt.length) return
        
        return setTimeout(()=>{
            letterIndex = -15;
            spnText.textContent="";
            addLetters();
        },2000)
      
        
    }

    setTimeout(addLetters, 100)
}

addLetters();


const addCursor = () =>{
    spnCursor.classList.toggle('cursor');
}

setInterval(addCursor, 500);