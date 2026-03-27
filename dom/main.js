const addTask = document.getElementsByClassName("add-btn")[0];
const modal = document.getElementsByClassName("modal")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
const taskList = document.getElementById("taskList");
const saveBtn = document.getElementsByClassName("save-btn")[0];
const editModal = document.getElementsByClassName('edit-modal')[0]
const updateBtn = document.getElementsByClassName('update-btn')[0]

let tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: "pending",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "completed",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "in-progress",
  },
];

function render() {
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const data = `
        <div class="task">
          <div class="task-header">
            <div class="task-title">${task.title}</div>
            <span class="badge ${task.status}">${task.status}</span>
          </div>
          <div class="task-desc">${task.description}</div>
          <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
          <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
        </div>
    `;
    taskList.innerHTML += data;
  });
}

render();

addTask.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

saveBtn.addEventListener("click", function () {
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const status = document.getElementById("status");

  if (title.value != "" || desc.value != "") {
    const task = {
      id: taskList.length + 1,
      title: title.value,
      description: desc.value,
      status: status.value,
    };

    tasks.unshift(task);
    render();

    title.value = "";
    desc.value = "";
    status.value = "pending";
    modal.style.display = "none";
  }
  return;
});

function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  render();
}

function editTask(id) {
    const title = document.getElementById("edit-title");
    const desc = document.getElementById("edit-desc");
    const status = document.getElementById("edit-status");

    let task = tasks.find((task) => task.id === id);

    if (task) {
        title.value = task.title;
        desc.value = task.description;
        status.value = task.status;

        currentEditId = id;
    }

    editModal.style.display = "flex";
}

  updateBtn.addEventListener("click", function () {
    const title = document.getElementById("edit-title");
    const desc = document.getElementById("edit-desc");
    const status = document.getElementById("edit-status");

    let task = tasks.find(task => task.id === currentEditId);

    if (task) {
        task.title = title.value;
        task.description = desc.value;
        task.status = status.value;
    }

    render();
    editModal.style.display = "none";
});