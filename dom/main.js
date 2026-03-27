const main = document.getElementById("tasks");
const addTaskBtn = document.querySelector(".add-btn")

let taskDb = [
    {
        id: 1,
        title : "Task-1",
        description : "Description for Task-1",
        status : "pending"
    },
    {
        id: 2,
        title : "Task-2",
        description : "Description for Task-2",
        status : "progress"
    },
    {
        id: 3,
        title : "Task-3",
        description : "Description for Task-3",
        status : "completed"
    }
];

function render() {
    main.innerHTML = ""; 
    
    taskDb.forEach((task) => {
        main.innerHTML += `
        <div class="task">
        <div class="task-header">
        <div class="task-title">${task.title}</div>
        <span class="badge ${task.status}">${task.status}</span>
        </div>
        
        <div class="task-desc">${task.description}</div>
        <button class="delete-btn">Delete</button>
        </div>
        `;
    });
}

render();

addTaskBtn.addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    if (document.getElementById("")) {
        
    }
})