import express from "express";

const app = express();
const PORT = 3003;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

const tasks = [
  { id: 1, title: "Aprender express", completed: false },
  { id: 2, title: "Crear APIs", completed: true },
];
let nextId = 3;

// Get - Obtener todas las tareas
app.get("/tasks", (req, res) => {
  const { completed } = req.query;

  let filteredTasks = tasks;
  if (completed !== undefined) {
    filteredTasks = tasks.filter(
      (tasks) => task.completed === (completed === "true"),
    );
  }

  res.json({
    count: filteredTasks.length,
    tasks: filteredTasks,
  });
});

// GET - Obtener tarea por ID
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      error: "Tarea no encontrada",
    });
  }

  res.json(task);
});

// POST - crear nueva tarea

app.post("/tasks", (req, res) => {
  console.log(req.body);
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      error: "El titulo es requerido",
    });
  }

  const newTask = {
    id: nextId++,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Tarea creada exitosamente",
    task: newTask,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
