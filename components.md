#Componentes

- Formulario (Form)

  - Recibe: Nada.
  - Estado: Ninguno.
  - Muestra: Un input para que el usuario añada una tarea y un botón para submitearla.
  - Acciones del usuario: Escribir la tarea que desee añadir.

- Listado toDo (ToDoList)

  - Recibe: Nada.
  - Estado: Del context, la lista de tareas..
  - Muestra: Una lista de tareas generadas por el usuario.
  - Acciones del usuario: Ninguna.

- Elemento del listado (ToDoTask)

  - Recibe: La tarea a mostrar y el estado de la misma (si está cumplida o no).
  - Estado: Ninguno.
  - Muestra:
    - Si la tarea es nueva: una tarea pendiente de completar.
    - Si la tarea ha sido completada: la misma tarea, tachada.
    - Se mostrará un botón para eliminar la tarea.
  - Acciones del usuario:
    - Marcar la tarea como completada.
    - Eliminar la tarea.

- Botón de tipo submit (FormButton)

  - Recibe: Texto a mostrar.
  - Estado: Ninguno.
  - Muestra: Un botón con el texto recibido.
  - Acciones del usuario: Al hacer click se hará submit del formulario.

#Capa de datos

- Cada tarea tendrá asociado un objeto con las siguientes propiedades:

  - Un id
    - No admite modificaciones
  - Un nombre (que será la descripción misma de la tarea)
    - No admite modificaciones (más allá de que el usuario pueda crear la tarea con el nombre que quiera)
  - Si la tarea ha sido completada o no
    - Admite modificaciones: en cualquier momento el usuario podrá pasarla de done a undone, y viceversa.

- El propio objeto podrá ser eliminado a voluntad del usuario
