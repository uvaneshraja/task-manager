document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") return;

  let tasks = getTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  loadTasks();
}

function loadTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  let tasks = getTasks();

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">X</button>
    `;

    list.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}