class CompleteTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    execute(id) {
        const task = this.taskRepository.findById(id);

        if (!task) {
            throw new Error("Tarea no encontrada");
        }

        task.complete();
        return task;
    }
}

module.exports = CompleteTask;