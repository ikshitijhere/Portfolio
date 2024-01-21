

let EnterBtn = document.querySelector('button');
EnterBtn.addEventListener('click', Firethis);

function Firethis() {
    var name1 =  prompt("Enter Your Name:");
    var middle =  prompt("Enter Your middle name:");
    var last =  prompt("Enter Your Last Name:");
  
    EnterBtn.textContent = `Your Welcome to javascript tutorial ${name1} ${middle} ${last}`; 
}