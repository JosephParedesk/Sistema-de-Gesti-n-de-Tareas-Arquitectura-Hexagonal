const Task = require("../../domain/Task");

class CreateTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    execute(id, title) {
        const task = new Task(id, title);
        this.taskRepository.save(task);
        return task;
    }
}

module.exports = CreateTask;