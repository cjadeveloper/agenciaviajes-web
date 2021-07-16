import { Viaje } from '../models/Viaje.js';


const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // consultar la db
    try {
        const viajes = await Viaje.findAll();
        
        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes,
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

const paginaViajeDetalle = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } }) // ({ where: { slug : slug } })

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje,
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaViajeDetalle,
}