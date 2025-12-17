const tasks: string[] = [];

const addTask = (task: string) => {
  tasks.push(task);
};

const removeTask = () => {
  tasks.pop();
};

const listTasks = () => {
  console.log(tasks);
};

export { addTask, removeTask, listTasks };
