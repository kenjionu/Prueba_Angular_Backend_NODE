const Movie = require('./../models/Movie/Movie')



exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Movie.find(function(err, MOVIX){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(MOVIX);
        }
    });
};
exports.create = function(req, res) {
    let body = req.body;

    let { nombre, fecha_pub, estado, imagen } = body;
    let movie = new Movie({
      nombre,
      fecha_pub,
      estado,
      imagen
    });
movie.save((err, movieDB) => {
    if (err) {
      return res.status(400).json({
         ok: false,
         err,
      });
    }
    res.json({
          ok: true,
          movie: movieDB
       });
    })
}
exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Movie.findById(req.params.movieId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve movie with id " + req.params.movieId});
        } else {
            res.send(data);
        }
    });
};
exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Movie.deleteOne({_id: req.params.movieId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete movie with id " + req.params.id});
        } else {
            res.send({message: "movie deleted successfully!"})
        }
    });
};

exports.update = function(req, res) {
    // Update a movie identified by the movieId in the request
    Movie.findById(req.params.movieId, function(err, movie) {
        if(err) {
            res.status(500).send({message: "Could not find a movie with id " + req.params.movieId});
        }

        movie.nombre = req.body.nombre;
        movie.fecha_pub = req.body.fecha_pub;
        movie.imagen = req.body.imagen;
        movie.estado = req.body.estado;

        movie.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update movie with id " + req.params.movieId});
            } else {
                res.send(data);
            }
        });
    });
};

