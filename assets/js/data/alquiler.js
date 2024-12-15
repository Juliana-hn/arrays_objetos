import{propiedades_alquiler} from "./propiedades.js";

const mostrarProp = (propiedades , containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    for (const propiedad of propiedades){
        const NuevoCard = document.createElement('div');
        NuevoCard.className = 'col-md-4 mb-4'
        const DivContent = `
        <div class="card h-100 shadow rounded">
         <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="${propiedad.nombre}"
        />
         <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
          </p>
           <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banos} Baños
          </p>
           <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <i class="fas ${propiedad.smoke ? 'fa-smoking text-success' : 'fa-smoking-ban text-danger'}"></i>
         ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}</p>
        <i class="fas ${propiedad.pets ? 'fa-paw text-success' : 'fa-ban text-danger'}"></i>
        ${propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas"}</p>
        </div>
        `
        NuevoCard.innerHTML = DivContent
        container.appendChild(NuevoCard)
    }
    }
    
    mostrarProp (propiedades_alquiler, "propiedadesAlquilerContainer");