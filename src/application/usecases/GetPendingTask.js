class GetPendingTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    execute() {
        return this.taskRepository.findAll().filter(t => !t.completed);
    }
}

module.exports = GetPendingTask;