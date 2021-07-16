import Sequelize from 'sequelize';
import db from '../config/db.js';

// Definimos el modelo Viaje. Un modelo Sequelize es una abstracción
// de una tabla en la base de datos. 
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },    
    descripcion: {
        type: Sequelize.STRING
    },    
    disponibles: {
        type: Sequelize.STRING
    },    
    slug: {
        type: Sequelize.STRING
    },    
})
