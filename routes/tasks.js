// routes/tasks.js

const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware');
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/', authenticateToken, async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', authenticateToken, async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    const task = await getTaskById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  const { title, description, status, assignee_id } = req.body;
  try {
    const newTask = await createTask(title, description, status, assignee_id);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, status, assignee_id } = req.body;
  try {
    const updatedTask = await updateTask(taskId, title, description, status, assignee_id);
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    const deleted = await deleteTask(taskId);
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
