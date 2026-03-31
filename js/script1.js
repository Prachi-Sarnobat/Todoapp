document.addEventListener("DOMContentLoaded", () => {
let navbtn = document.querySelector(".navbtn");
const openTaskBtn = document.querySelector(".open_task");
const popup = document.querySelector(".popup_form");
const submit = document.querySelector(".submit");
const display = document.querySelector(".display_tasks");

let nav = document.querySelector(".nav");
navbtn.onclick=()=> {
    if(nav.style.display==="none"){
        nav.style.display="inline-block";
    }else{
        nav.style.display="none";
    }
}

if (!openTaskBtn || !popup || !submit || !display) {
console.error("Required elements not found");
return;
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

openTaskBtn.addEventListener("click", () => {
popup.style.display = popup.style.display === "block" ? "none" : "block";
});


submit.addEventListener("click", () => {

const name = document.getElementById("task_name").value;
const date = document.getElementById("task_date").value;
const time = document.getElementById("task_time").value;

if (!name || !date || !time) {
alert("Fill all fields");
return;
}

tasks.push({ name, date, time });
localStorage.setItem("tasks", JSON.stringify(tasks));

renderTasks();


document.getElementById("task_name").value = "";
document.getElementById("task_date").value = "";
document.getElementById("task_time").value = "";

popup.style.display = "none";
});
function renderTasks() {
  display.innerHTML = tasks.map(task => `
    <div class="task_card">
      <p><strong>Task:</strong> ${task.name}</p>
      <p><strong>Date:</strong> ${task.date}</p>
      <p><strong>Time:</strong> ${task.time}</p>
    </div>
  `).join("");
}


});
