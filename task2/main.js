let toggle = document.getElementById('toggle');
let main = document.querySelector('body');
toggle.addEventListener('click', () => {
  main.classList.toggle('dark');
});

const modal = document.getElementById("careers_modal");
const btn = document.getElementById("btn_careers");
const close_modal =  document.getElementById("close_modal");

btn.addEventListener('click', () =>{
  modal.style.display = 'block';
});

close_modal.addEventListener('click', () =>{
  modal.style.display = 'none';
});

window.addEventListener('click', (event) =>{
  if(event.target === modal){
    modal.style.display = 'none';
  }
});