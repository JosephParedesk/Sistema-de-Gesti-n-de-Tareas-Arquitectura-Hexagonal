class Task {
    constructor(id, title, completed = false) {
        if (!title || title.trim() === "") {
            throw new Error("El título no puede estar vacío");
        }

        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    complete() {
        this.completed = true;
    }
}

module.exports = Task;