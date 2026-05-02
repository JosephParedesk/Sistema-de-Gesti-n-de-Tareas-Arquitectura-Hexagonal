class InMemoryTaskRepository {
    constructor() {
        this.tasks = [];
    }

    save(task) {
        this.tasks.push(task);
    }

    findAll() {
        return this.tasks;
    }

    findById(id) {
        return this.tasks.find(t => t.id === id);
    }

    delete(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}

module.exports = InMemoryTaskRepository;