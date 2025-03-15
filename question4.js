let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function viewTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    let task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example usage
addTask(1, "Study", "Prepare for the midterm exam");
console.log(viewTasks());
updateTask(1, "Study JavaScript", "Focus on array methods");
console.log(viewTasks());
deleteTask(1);
console.log(viewTasks());
