class DeleteTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    execute(id) {
        this.taskRepository.delete(id);
    }
}

module.exports = DeleteTask;