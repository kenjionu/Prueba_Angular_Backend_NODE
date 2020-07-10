const express = require('express');
const Movie = require('./../models/Movie/Movie');
const app = express();
const MovieController = require('./../controllers/MovieController')
const cors = require('cors')

app.use(cors())

/*Para sacar todos*/
app.get('/movies/', MovieController.findAll);
/*para sacar solo un registro*/
app.get('/movies/:movieId', MovieController.findOne);
/*Para crear una película*/
app.post('/movie/add', MovieController.create);
/*para eliminar una pelicula*/
app.delete('/movie/delete/:movieId', MovieController.delete);
/*para update una pelicula*/
app.put('/movie/update/:movieId', MovieController.update);



module.exports = app;