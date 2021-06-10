const guardarTarea = (db, tarea) => {
    db.setItem(tarea.id, JSON.stringify(tarea));
    window.location.href = '/'
}

const cargarTarea = (db, parentNode) => {
    let claves = Object.keys(db);
    for(clave of claves){
        let tarea = JSON.parse(db.getItem(clave));
        crearTarea(parentNode, tarea, db);
    }
}

const comprobarTarea = () => {
    if(db.length==0){
        let tareaXD = document.createElement('p')
        tareaXD.classList.add('tareaXD');
        listadoTareas.appendChild(tareaXD);
        let randomnumber=Math.round(Math.random()*10);
        switch(randomnumber){
            case 1:
                tareaXD.innerHTML= 'Felicidades haz completado tus tareas! eso o... estas evitando hacerlas :/ ? <br>  En cualquier caso añade una o disfruta de tu dia libre';
                break;
            case 2:
                tareaXD.innerHTML= 'Mensaje secreto que no deberia ser visualizado <br> Shhhh!! continua con tus tareas ;)';
                break;
            case 3:
                tareaXD.innerHTML= 'ZzzZzzzz....';
                break;      
             case 4:
                tareaXD.innerHTML= '*Sonidos de grillo*';
                break; 
            case 5:
                tareaXD.innerHTML= '* Pero no vino nadie.';
                break; 
                
            default:
                tareaXD.innerHTML= 'Para empezar añade una tarea en el campo de arriba';
                break;
        } 
    }
}

const crearTarea = (parentNode, tarea, db) => {
    let tareaDiv = document.createElement('div');
    let tareaTitulo = document.createElement('p');
    let tareaFechai = document.createElement('p');
    let tareaFechaf = document.createElement('p');
    let tareaDescripcion = document.createElement('p');
    let tareaEliminar = document.createElement('span');
    
    tareaTitulo.innerHTML = tarea.nombre;
    tareaFechai.innerHTML = tarea.fechai;
    tareaFechaf.innerHTML = tarea.fechaf;
    tareaDescripcion.innerHTML = tarea.descripcion;
    tareaEliminar.innerHTML = 'delete_forever';

    tareaEliminar.onclick = () => {
        db.removeItem(tarea.id);
        window.location.href = '/';
    }

    tareaDiv.classList.add('tarea');
    tareaEliminar.classList.add('material-icons','icono');

    tareaDiv.appendChild(tareaTitulo);
    tareaDiv.appendChild(tareaFechai);
    tareaDiv.appendChild(tareaFechaf);
    tareaDiv.appendChild(tareaDescripcion);
    tareaDiv.appendChild(tareaEliminar);

    parentNode.appendChild(tareaDiv);
}

