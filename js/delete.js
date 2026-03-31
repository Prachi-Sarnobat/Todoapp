document.addEventListener("DOMContentLoaded", () => {
      let navbtn = document.querySelector(".navbtn");
  let nav = document.querySelector(".nav");
    navbtn.onclick=()=> {
    if(nav.style.display==="none"){
        nav.style.display="inline-block";
    }else{
        nav.style.display="none";
    }
    }

  const displayArea = document.querySelector(".work");
  
  const deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];

  if (deletedTasks.length === 0) {
    displayArea.innerHTML = "<p>No deleted tasks</p>";
    return;
  }

  displayArea.innerHTML = deletedTasks.map(task => `
    <div class="task_card">
      <p><strong>Task:</strong> ${task.name}</p>
      <p><strong>Date:</strong> ${task.date}</p>
      <p><strong>Time:</strong> ${task.time}</p>
    </div>
  `).join("");

});