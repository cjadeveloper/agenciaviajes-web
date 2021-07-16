import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {

    // Validar formulario
    const { nombre, email, mensaje } = req.body;
    const errores = [];

    if (!nombre) {
        errores.push({ mensaje: "El Nombre está vacío" });
    }
    if (!email) {
        errores.push({ mensaje: "El Correo está vacío" });
    }
    if (mensaje.trim() === "") {
        errores.push({ mensaje: "El Mensaje está vacío" });
    }

    if (errores.length > 0) {
        // Mostrar errores 
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
        });
    } else {
        // Almacenarlo en la DB
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });

            res.redirect('/testimoniales');
            
        } catch (error) {
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
}