let studentName=document.getElementById("studentName");
let studentButton= document.getElementById("studentButton");
let studentList =["Fer", "Dioni", "Dario"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomStudent(){
    
    
    studentName.innerText=studentList[getRandomInt(studentList.length)];
    console.log("click");
}

studentButton.addEventListener("click",getRandomStudent);