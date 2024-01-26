setTasks([
    ...tasks,
    {
        id: getNextId(tasks),
        text: text,
        done: false,
    },
]);


____

const nextTasks = tasks.map((t) => {
    if (t.id === task.id) {
        return task;
    } else {
        return t;
    }
});
setTasks(nextTasks);

_____________

setTasks(tasks.filter((t) => t.id !== taskId));
