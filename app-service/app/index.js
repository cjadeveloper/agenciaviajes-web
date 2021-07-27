import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express()

// Conectar a la DB
db.authenticate()
    .then( () => console.log('Base de Datos Conectada') )
    .catch( error => console.log(error) );

// Habilito Pug
app.set('view engine', 'pug');


app.use((req, res, next) => {
    // Obtengo el año actual
    const year = new Date;

    //console.log(res);
    res.locals.actualYear = year.getFullYear();
    res.locals.siteName = 'Agencia de Viajes';

    next();
});

// Agregar body parser para leer los datos de un formulario
app.use(express.urlencoded({extended: true}));

// Defino la carpeta pública
app.use(express.static('public'));

// Agrega Router
app.use('/', router);

// Puerto y Host para la app.
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`)
})