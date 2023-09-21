class TicketManager{
    #precioBaseGanancia = 0.15;
    precioBasePublica = 0.10;
    static variablePrueba;

    constructor() {
        this.eventos = [];
    }

    getEventos = () =>{
        return this.eventos;
    }

    agregarEventos = (nombre, lugar, precio, capacidad = 50, fecha = new Date().toDateString()) =>{
        const evento = {
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseGanancia,
            capacidad, 
            fecha,
            participantes: []
        }
        //[{id: 1, evento: 'concierto'}, {id: 2}]
        //Id autoincrementable 1,2,3,4,5 .....
        //Primer Caso
        //[{id: 1,nombre: 'evento 1'}, {id: 2,nombre: 'evento 2'}] arreglo dejo 
        //[1,2,3,4,5] 0 1 2 3 4   longitud del arreglo tenmos 5 elementos(se agrega el -1 para acceder al '5'. por ej: [this.eventos.length - 1])
        //
        //
        if (this.eventos.length === 0){
            evento.id = 1;
        }else{
            evento.id = this.eventos[this.eventos.length - 1].id + 1;
        }

        this.eventos.push(evento);
    }

    //necesito saber el evento al cual quiero inscribirme //id del evento
    //el participnte va estar representado por un id
    agregarParticipante = (idEvento, idParticipante) => {
        const eventoIndex = this.eventos
            .findIndex(evento => evento.id === idEvento);

        if(eventoIndex === -1){
            console.log("evento no encontrado");
            return;
        }

        //validar que el participante no se haya inscrito antes
        const usuarioRegistado = 
            this.eventos[eventoIndex].participantes.includes(idParticipante);

        if(usuarioRegistado){
            console.log('Usuario ya registrado');
            return;
        }

        this.eventos[eventoIndex].participantes.push(idParticipante);
    }
}

const manejadorEventos = new TicketManager();
manejadorEventos.precioBasePublica

manejadorEventos.agregarEventos('Nirvana', 'Argentina', 50, 87000);
manejadorEventos.agregarEventos('Metallica', 'Brasil', 50, );
manejadorEventos.agregarEventos('Guns N Roses', 'Uruguay', 200, 50000);
manejadorEventos.agregarParticipante(1, 1234)
manejadorEventos.agregarParticipante(2, 1234)
manejadorEventos.agregarParticipante(3, 1234)
manejadorEventos.agregarParticipante(4, 1234)
manejadorEventos.agregarParticipante(1, 1234)

console.log(manejadorEventos.getEventos());    