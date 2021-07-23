import { Viaje } from '../models/Viaje.js';
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio = async (req, res) => {
    // Consultando los viajes y testimoniales con una promise.all() de una forma eficiente
    // Sin bloquear el código.
    const promiseDB = []

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        // Consultando viajes y testimoniales a la DB de una forma no eficiente. Codigo bloqueante.
        // const viajes = await Viaje.findAll({ limit: 3});
        // const testimoniales = await Testimonial.findAll({ limit: 3});

        const result = await Promise.all(promiseDB);


        res.render('inicio', {
            pagina: 'Inicio',
            home: 'home',
            viajes: result[0],
            testimoniales: result[1],
        });

    } catch (error) {
        console.log(error);
    }
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

const paginaTestimoniales = async (req, res) => {
    try {
        // consultamos la DB
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,
        });
    } catch (error) {
        console.log(error);        
    }
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