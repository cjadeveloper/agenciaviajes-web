import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes','user_service','user@1234', {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

export default db;
