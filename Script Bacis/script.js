let namestebtn = document.querySelector('button');
namestebtn.addEventListener('click',InputMsg);

function InputMsg(){
    let EmpID = prompt("Enter Your Employee ID:");
    namestebtn.textContent = 'Your Emploee ID is:'+EmpID;
}
//javascript is a dynamically typeed language
