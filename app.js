const data = [
    { name: 'Revisión rutinaria', level: 'Nivel de búsqueda 1' },
    { name: 'Detención de tránsito', level: 'Nivel de búsqueda 1' },
    { name: 'Interrogatorio', level: 'Nivel de búsqueda 1' },
    { name: 'Actitud sospechosa', level: 'Nivel de búsqueda 1' },
    { name: 'Exhibicionismo', level: 'Nivel de búsqueda 1' },
    { name: 'Poseer máscara en vía pública', level: 'Nivel de búsqueda 1' },
    { name: 'Alterar el orden público', level: 'Nivel de búsqueda 1' },
    { name: 'Consumo de estupefacientes', level: 'Nivel de búsqueda 1' },
    { name: 'Insultar a un funcionario público', level: 'Nivel de búsqueda 1' },
    { name: 'Amenazar a un civil o funcionario público', level: 'Nivel de búsqueda 1' },
    { name: 'Entrar a comisarías o bases militares', level: 'Nivel de búsqueda 1' },
    { name: 'Fugarse', level: 'Nivel de búsqueda 2' },
    { name: 'Complicidad', level: 'Nivel de búsqueda 2' },
    { name: 'Ofrecimiento de servicios sexuales en vía pública', level: 'Nivel de búsqueda 2' },
    { name: 'Atropellar a oficiales o personas', level: 'Nivel de búsqueda 2' },
    { name: 'Conducción temeraria', level: 'Nivel de búsqueda 2' },
    { name: 'No seguir órdenes de retirarse de un lugar', level: 'Nivel de búsqueda 2' },
    { name: 'Entorpecer el proceso legal', level: 'Nivel de búsqueda 2' },
    { name: 'Negarse a entregar mochila o vehículo para revisión', level: 'Nivel de búsqueda 2' },
    { name: 'Revisar a un oficial de policía o marina', level: 'Nivel de búsqueda 2' },
    { name: 'Carreras ilegales', level: 'Nivel de búsqueda 2' },
    { name: 'Robo de vehículo', level: 'Nivel de búsqueda 3' },
    { name: 'Exceder la cantidad máxima permitida de posesión de estupefacientes', level: 'Nivel de búsqueda 3' },
    { name: 'Porte de armamento en menor cantidad', level: 'Nivel de búsqueda 3' },
    { name: 'Agredir a un funcionario público físicamente', level: 'Nivel de búsqueda 3' },
    { name: 'Guardar vehículo en plena revisión', level: 'Nivel de búsqueda 3' },
    { name: 'Remolcar con una grúa patrullas o cualquier tipo de vehículo gubernamental', level: 'Nivel de búsqueda 3' },
    { name: 'Ultraje', level: 'Nivel de búsqueda 3' },
    { name: 'Simulación de hecho punible', level: 'Nivel de búsqueda 3' },
    { name: 'Encubrimiento', level: 'Nivel de búsqueda 3' },
    { name: 'Posesión de armamento en mayor cantidad', level: 'Nivel de búsqueda 4' },
    { name: 'Asalto a un peatón', level: 'Nivel de búsqueda 4' },
    { name: 'Robo de casa', level: 'Nivel de búsqueda 4' },
    { name: 'Robo de negocio', level: 'Nivel de búsqueda 4' },
    { name: 'Robo de cajero', level: 'Nivel de búsqueda 5' },
    { name: 'Uso de arma de fuego', level: 'Nivel de búsqueda 5' },
    { name: 'Robo al banco', level: 'Nivel de búsqueda 6' },
    { name: 'Matar a un civil de cualquier forma', level: 'Nivel de búsqueda 6' },
    { name: 'Colocar explosivos en espacios públicos o con personas cerca', level: 'Nivel de búsqueda 6' },
    { name: 'Robo al casino', level: 'Nivel de búsqueda 7' },
    { name: 'Asesinato de 2 o más civiles', level: 'Nivel de búsqueda 7' },
    { name: 'Abuso Sexual', level: 'Nivel de búsqueda 7' },
    { name: 'Atacar a un funcionario público con arma de fuego', level: 'Nivel de búsqueda 8' },
    { name: 'Secuestro o privación de libertad de un individuo', level: 'Nivel de búsqueda 8' },
    { name: 'Atentado o ataque armado de un grupo delictivo/banda a la ciudadanía', level: 'Nivel de búsqueda 9' },
    { name: 'Atentado o ataque armado de un grupo delictivo/banda a una institución pública o privada', level: 'Nivel de búsqueda 10' },
    { name: 'Peculado', level: 'Nivel de búsqueda 10' },
    { name: 'Corrupción de funcionarios', level: 'Nivel de búsqueda 10' },
    { name: 'Usurpación de funciones', level: 'Nivel de búsqueda 10' },
    { name: 'Estafa o fraude', level: 'Nivel de búsqueda 10' },
    { name: 'Asesinar a un funcionario público', level: 'Nivel de búsqueda 11' },
    { name: 'Atentado o ataque armado de un grupo delictivo/banda al personal de una institución pública', level: 'Nivel de búsqueda 12' },
    { name: 'Constriña o dadivas', level: 'Nivel de búsqueda 15' },
    { name: 'Orden directa de alto mando', level: 'Nivel de búsqueda 13 y 14'},
    { name: 'Si la victima son dos o mas funcionarios publicos', level: 'Agravante 1 cargo'},
    { name: 'Obstruccion a la justicia o desacato', level: 'Agravante 1 cargo'},
    { name: 'Robo con agavillamiento (2 personas)', level: 'Agravante 1 cargo'},
    { name: 'Sospechoso se niega a pagar multa', level: 'Agravante 1 cargo'},
    { name: 'Induccion a la concusion', level: 'Agravante 1 cargo'},
    { name: 'Si el sospechoso habiendo sido detenido se fugue de la patrulla o recinto publico', level: 'Agravante 2 cargo'},
    { name: 'Por cada victima mortal sea de faccion o civil', level: 'Agravante 1 cargo por cada uno'},
    { name: 'Rendirse al momento de ser detenido, primera advertencia', level: 'Atenuante -1 cargo'},
    { name: 'Cooperar con el arresto o investigacion', level: 'Atenuante -1 cargo'},
    { name: 'Aportar informacion de interes a la policia cuando sea pedido', level: 'Atenuante -1 cargo'},
    { name: 'Delitos leves cuando pague la multa', level: 'Atenuante -1 cargo'},
    { name: '211 Robo (con violencia o amenaza)', level: 'Codigo 211'},
    { name: '187 Homicidio (cuando se presencia un homicidio o la denuncia del mismo)', level: 'Codigo 187'},
    { name: '207 Secuestro (privacion de libertad de un ciudadano por una o varias personas)', level: 'Codigo 207'},
    { name: 'koih Secuestro (de un oficial del Departamento de policia)', level: 'Codigo KOIH'},
    { name: '311 Exhibicionismo (Exhibir partes en publico o cometa actos lascivos)', level: 'Codigo 311'},
    { name: '415 Perturbaciones a la normalidad o tranquilidad (Personas creando disturbio colectivo)', level: 'Codigo 415'},
    { name: '459 Robo con allanamiento (Robo dentro de una propiedad, negocio, casa)', level: 'Codigo 459'},
    { name: '484 Hurto (Apropiacion de un bien ajeno que a diferencia del robo este no tipifica violencia', level: 'Codigo 484'},
    { name: '507 Perturbacion al orden publico (Perturbaciones en menor escala, bocinas, manifestaciones', level: 'Codigo 507'},
    { name: '586 Sospechosos en un vehiculo (un individuo que es objetivo a una revision he indica que se moviliza en un vehiculo de 4 o 2 ruedas)', level: 'Codigo 586'},
    { name: 'ona Oficial necesita ayuda (Un oficial se encuentra en peligro y necesita ayuda inmediata, todas las unidades deben acudir)', level: 'Codigo ONA'},
    { name: '2 Llamada de emergencia que requiere la asistencia (Sin el uso de sirena, unicamente luces)', level: 'Codigo 2'},
    { name: '3 Llamada de emergencia de manera rapida (Deben emplearse luces y sirenas', level: 'Codigo 3'},
    { name: '4 Situacion controlada (Los que venian pueden retirarse y continuar con su labor, empleado por un supeior inmediato)', level: 'Codigo 4'},
    { name: '5 En determinado lugar marcado por el codigo no podran estar patrullas ni circular cerca del area (Unicamente marcado por Police Detectives, Supervisor, Chiev Supervisor y miembros de la cupula)', level: 'Codigo 5'},
    { name: '5 Liberar codigo 5 (La zona ya puede ser patrullada)', level: 'Liberar codigo 5'},
    { name: '6 Cuando una patrulla se encuentra asignada a cualquier eventualidad', level: 'Codigo 6'},
    { name: '6 adam Cuando una patrulla se encuentra en una asignacion y requiere asistencia de sus compañeros', level: 'Codigo 6 Adam'},
    { name: '7 Cuando una unidad patrullera sale temporalmente de sus asignaciones para realizar algo, pero se mantiene en servicio (Aplica para cosas de manera IC comida, bebida)', level: 'Codigo 7'},
    { name: '12 Falsa alarma', level: 'Codigo 12'}

    





];  

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.level}`;
        resultList.appendChild(li);
    });
});