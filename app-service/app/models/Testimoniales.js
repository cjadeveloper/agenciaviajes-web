import Sequelize from 'sequelize';
import db from '../config/db.js';

// Definimos el modelo Viaje. Un modelo Sequelize es una abstracción
// de una tabla en la base de datos. 
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
})
