function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.querySelector(".email_error");
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      emailError.textContent = "";
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please type a valid email";
    } else {
      emailError.textContent = "";
    }
  }


const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("task_container");

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData()
  }
  inputBox.value = "";

}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
}, false);


function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
