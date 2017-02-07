
var express      = require('express'),
      router           = express.Router();
var   User = require('./models/user');

        module.exports = router;




        router.get('/api/user/:id', function(req, res) {
             User.findById(req.params.id, function(err, user) {
                if (err)
                    res.send(err);

                res.json(user); 
            });           

        });



        router.post('/api/user', function(req, res) {
            console.log(req);
            var userAux = {
                name: req.body.name,
                sex: req.body.gender,
                age: req.body.age,
                country: req.body.country,
                dateCreated: new Date()
            }

            User.create(userAux, function(err, user) {

                if (err)
                    res.status(500).send(err);

                res.status(200).json({id: user._id}); 
            });

        });



