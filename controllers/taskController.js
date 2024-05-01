// controllers/taskController.js

// Sample task data (replace with database interactions)
const tasks = [];

// Function to get all tasks
async function getAllTasks() {
  // Simulate database lookup
  return tasks;
}

// Function to get a task by ID
async function getTaskById(id) {
  // Simulate database lookup
  return tasks.find(task => task.id === id);
}

// Function to create a new task
async function createTask(title, description, status, assignee_id) {
  // Simulate database interaction (replace with actual database code)
  const newTask = { id: tasks.length + 1, title, description, status, assignee_id, created_at: new Date(), updated_at: new Date() };
  tasks.push(newTask);
  return newTask;
}

// Function to update a task by ID
async function updateTask(id, title, description, status, assignee_id) {
  // Simulate database interaction (replace with actual database code)
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) {
    return null; // Task not found
  }
  tasks[index] = { ...tasks[index], title, description, status, assignee_id, updated_at: new Date() };
  return tasks[index];
}

// Function to delete a task by ID
async function deleteTask(id) {
  // Simulate database interaction (replace with actual database code)
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) {
    return null; // Task not found
  }
  tasks.splice(index, 1);
  return true;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
