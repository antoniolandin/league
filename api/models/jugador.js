const mongoose = require('mongoose')

const JugadorSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    equipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipo',
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    primer_apellido: String,
    segundo_apellido: String,
    grado: String,
    curso: Number,
    goles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gol',
    },
    numero_partidos_jugados: Number,
},
{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('Jugador', JugadorSchema)
