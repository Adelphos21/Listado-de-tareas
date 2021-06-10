
const nombre = document.querySelector('.cnombre');
const fechai = document.querySelector('.cfechai');
const fechaf = document.querySelector('.cfechaf');
const descripcion = document.querySelector('.cdescripcion');
const agregarTarea = document.querySelector('.btn-agregar-tarea');

const listadoTareas = document.querySelector('.listado-tareas')
const db = window.localStorage;

agregarTarea.onclick = () => {
    let tarea = {
        id: Math.random(0, 100),
        nombre: nombre.value,
        fechai: fechai.value,
        fechaf: fechaf.value,
        descripcion: descripcion.value,
    }
    guardarTarea(db, tarea);
}

cargarTarea(db, listadoTareas);
comprobarTarea();