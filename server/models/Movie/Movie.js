const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// let rolesValidos = {
//     values: ["ADMIN", "USER"],
//     message: '{VALUE} no es un role válido'
// }
let Schema = mongoose.Schema;

let movieSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    fecha_pub: {
        type: String,
        required: [true, "El correo es necesario"],
    },
    imagen: {
        type: String,
        required: [true, "La Imagen es obligatoria"],
    },
    estado: {
        type: String,
        required: [true, "El estado es obligatoria"],
    },
    // role: {
    //     type: String,
    //     default: 'USER',
    //     required: [true],
    //     enum: rolesValidos,
    // },
    });

    // elimina la key password del objeto que retorna al momento de crear un usuario
movieSchema.methods.toJSON = function() {
    let movie = this;
    let movieObject = movie.toObject();
    return movieObject;
 }

 movieSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('Movie', movieSchema)