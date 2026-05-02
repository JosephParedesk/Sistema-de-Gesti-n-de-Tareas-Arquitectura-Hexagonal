class ListTasks {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    execute() {
        return this.taskRepository.findAll();
    }
}

module.exports = ListTasks;