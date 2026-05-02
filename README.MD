# Sistema de Gestión de Tareas – Arquitectura Hexagonal

## Descripción

Aplicación de consola desarrollada en Node.js para la gestión de tareas, implementada bajo el patrón de **Arquitectura Hexagonal (Ports and Adapters)**.

El proyecto demuestra la separación entre la lógica de negocio y la infraestructura tecnológica mediante una arquitectura desacoplada, mantenible y escalable.

---

## Funcionalidades

* Crear tareas
* Listar tareas registradas
* Marcar tareas como completadas
* Consultar tareas pendientes
* Eliminar tareas
* Persistencia temporal en memoria

---

## Arquitectura Implementada

El sistema sigue el patrón de Arquitectura Hexagonal:

### Dominio

* `Task.js`

### Casos de Uso

* `CreateTask.js`
* `ListTask.js`
* `CompleteTask.js`
* `DeleteTask.js`
* `GetPendingTask.js`

### Puertos

* `TaskRepository.js`

### Adaptadores Primarios

* CLI (`app.js`)

### Adaptadores Secundarios

* `InMemoryTaskRepository.js`

---

## Estructura del Proyecto

```bash id="mwh6d0"
src/
│
├── domain/
│   └── Task.js
│
├── application/
│   ├── ports/
│   │   └── TaskRepository.js
│   └── usecases/
│       ├── CreateTask.js
│       ├── ListTask.js
│       ├── CompleteTask.js
│       ├── DeleteTask.js
│       └── GetPendingTask.js
│
├── infrastructure/
│   └── repositories/
│       └── InMemoryTaskRepository.js
│
└── adapters/
    └── cli/
        └── app.js
```

---

## Instalación

```bash id="fyj1up"
git clone https://github.com/JosephParedesk/Sistema-de-Gesti-n-de-Tareas-Arquitectura-Hexagonal.git
cd Sistema-de-Gesti-n-de-Tareas-Arquitectura-Hexagonal
npm install
```

---

## Ejecución

```bash id="sx6a7e"
npm start
```

---

## Tecnologías Utilizadas

* Node.js
* JavaScript (CommonJS)
* Arquitectura Hexagonal

---

## Autores

**Maria Paula Melo Martinez**
**Joseph Alejandro Paredes Gaitán**
**Ana Maria Mendoza Moreno**
**Ivan Santiago Cruz Villarraga**

---

## Licencia

Proyecto desarrollado con fines académicos.
