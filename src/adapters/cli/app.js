const readline = require("readline");

const InMemoryTaskRepository = require("../../infraestructure/repositories/InMemoryTaskRepository");

const CreateTask = require("../../application/usecases/CreateTask");
const ListTask = require("../../application/usecases/ListTask");
const CompleteTask = require("../../application/usecases/CompleteTask");
const DeleteTask = require("../../application/usecases/DeleteTask");
const GetPendingTask = require("../../application/usecases/GetPendingTask");

const repo = new InMemoryTaskRepository();

const createTask = new CreateTask(repo);
const listTask = new ListTask(repo);
const completeTask = new CompleteTask(repo);
const deleteTask = new DeleteTask(repo);
const getPendingTask = new GetPendingTask(repo);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n--- GESTIÓN DE TAREAS ---");
    console.log("1. Crear tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Ver pendientes");
    console.log("5. Eliminar tarea");
    console.log("0. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                rl.question("ID: ", (id) => {
                    rl.question("Título: ", (title) => {
                        try {
                            createTask.execute(Number(id), title);
                            console.log("Tarea creada");
                        } catch (e) {
                            console.log("Error:", e.message);
                        }
                        menu();
                    });
                });
                break;

            case "2":
                console.log(listTask.execute());
                menu();
                break;

            case "3":
                rl.question("ID de la tarea: ", (id) => {
                    try {
                        completeTask.execute(Number(id));
                        console.log("Tarea completada");
                    } catch (e) {
                        console.log("Error:", e.message);
                    }
                    menu();
                });
                break;

            case "4":
                console.log(getPendingTask.execute());
                menu();
                break;

            case "5":
                rl.question("ID de la tarea: ", (id) => {
                    deleteTask.execute(Number(id));
                    console.log("Tarea eliminada");
                    menu();
                });
                break;

            case "0":
                rl.close();
                break;

            default:
                console.log("Opción inválida");
                menu();
        }
    });
}

menu();