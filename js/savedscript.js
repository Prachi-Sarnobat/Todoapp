document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".saved_tasks");
    let navbtn = document.querySelector(".navbtn");

    let nav = document.querySelector(".nav");
    navbtn.onclick=()=> {
    if(nav.style.display==="none"){
        nav.style.display="inline-block";
    }else{
        nav.style.display="none";
    }
    }
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];

    if (!container) {
        console.error("saved_tasks container not found");
        return;
    }

    if (tasks.length === 0) {
        container.innerHTML = "<p>No saved tasks</p>";
        return;
    }

    container.innerHTML = tasks.map((task, index) => `
        <div class="task_card">
            <p><strong>Task:</strong> ${task.name}</p>
            <p><strong>Date:</strong> ${task.date}</p>
            <p><strong>Time:</strong> ${task.time}</p>
            <button class="deleteBtn" data-index="${index}">Delete</button>
        </div>
    `).join("");

    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;

            const removedTask = tasks.splice(index, 1)[0];
            deletedTasks.push({
                ...removedTask,
                deletedAt: new Date().toLocaleString()
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
            localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));

            location.reload();
        });
    });
});
