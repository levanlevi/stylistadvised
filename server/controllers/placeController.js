var placeController = function (Place, Track) {

    var post = function (req, res) {
        var place = new Place(req.body);

        if (!req.body.name) {
            res.status(400);
            res.send('name is required');
        }
        else {
            place.save();
            res.status(201);
            res.send(place);
        }
    };

    var get = function (req, res) {
        var query = req.query;

        Place.find(query, '_id name address phones emails', function (err, places) {
            if (err)
                res.status(500).send(err);
            else {
                // not just return the places but add some descriptive links
                var returnPlaces = [];
                places.forEach(function (element) {
                    var modifiedPlace = element.toJSON(); // toJSON() makes sure object is copied (not referenced)
                    modifiedPlace.links = {};
                    modifiedPlace.links.self = 'http://' + req.headers.host + '/api/places/' + modifiedPlace._id;
                    // filterByUrl = 'http://' + req.headers.host + '/api/places/?name=Marakesh';
                    // modifiedPlace.links.filterByPropertyName = filterByUrl.replace(' ', '%20');
                    returnPlaces.push(modifiedPlace);
                }, this);
                res.json(returnPlaces);
            }
        });
    }

    var singleMiddleware = function (req, res, next) {
        Place.findById(req.params.placeId, function (err, place) {
            if (err)
                res.status(500).send(err);
            else if (place) {
                req.place = place;
                next();
            }
            else
                res.status(404).send('place not found');
        });
    }

    var getById = function (req, res) {
        res.send(req.place);
    }

    var putPlace = function (req, res) {
        req.place.name = req.body.name;
        req.place.address = req.body.address;
        req.place.phones = req.body.rephonesad;
        req.place.emails = req.body.emails;
        req.place.save();
        res.json(req.place);
    }

    var patchPlace = function (req, res) {
        if (req.body._id)
            delete req.body._id;

        for (var p in req.body) {
            req.place[p] = req.body[p];
        }

        req.place.save(function (err) {
            if (err)
                res.status(500).send(err);
            else
                res.json(req.place);
        })
    }

    var deletePlace = function (req, res) {
        req.place.remove(function (err) {
            if (err)
                res.status(500).send();
            else
                res.status(204).send('place removed');
        });
    }

    var withTracks = function (req, res) {
        Place.findById(req.params.placeId)
            .populate('tracks')
            .exec(function (err, place) {
                res.send(place);
            });

    }

    var addTracks = function (req, res) {
        if (!req.body.tracks || req.body.tracks.length == 0) {
            res.status(400);
            res.send('at least a track is required');
        }

        Place.findById(req.params.placeId, function (err, place) {
            if (err) {
                res.status(500).send(err);
            } else if (place) {
                saveTracks(place, req.body.tracks);
                // res.status(201);
                // res.send(place);
                res.redirect('/api/places/withtracks/' + place._id);
            }
            else {
                res.status(404).send('place not found');
            }
        });
    };

    var clearTracks = function (req, res) {
        req.place.tracks = [];
        req.place.save();

        res.send(req.place);
    }

    function saveTracks(place, tracks) {
        tracks.forEach(item => {
            var track = new Track(item);
            track.save(); // TODO if exists don't save it.
            place.tracks.push(track._id);
        });
        place.save();
    }

    return {
        post: post
        , get: get
        , addTracks: addTracks
        , withTracks: withTracks
        , getById: getById
        , putPlace: putPlace
        , patchPlace: patchPlace
        , deletePlace: deletePlace
        , singleMiddleware: singleMiddleware
        , clearTracks: clearTracks
    };
};

module.exports = placeController;