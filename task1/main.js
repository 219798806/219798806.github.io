let toggle = document.getElementById('toggle');
let main = document.querySelector('.main');
toggle.addEventListener('click', () => {
  main.classList.toggle('dark');
});

var selected_number = null;
var selected_tile = null;
var mistakes = 0;
const size = 9;

var puzzle = [
  "000600400",
  "700003600",
  "000091080",
  "000000000",
  "050180003",
  "000306045",
  "040200060",
  "903000000",
  "020000100"
]
let table = document.getElementById("game-table");

window.onload = function(){
  populate_table();
}

function populate_table(){
  for(var a = 0; a < size; a++){
    for(var b = 0; b < size; b++){
      if(puzzle[a][b] != "0"){
        table.rows[a].cells[b].innerHTML = puzzle[a][b];
      }
    } 
  }
}

function select_options(){
  let option = document.getElementById("options");
  var number = option.innerHTML;
  option.addEventListener("click", select_number);
}

function select_number(){
  if(selected_number != null)
    selected_number.classList.remove("number-selected");
  selected_number = this;
  selected_number.classList.add("number-selected");
}