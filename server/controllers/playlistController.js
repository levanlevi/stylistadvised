var playlistController = function (Place, Track) {

    var search = function (req, res) {
        console.log(req.params);
        if (!req.params.filterText) {
            res.status(400);
            res.send('filterText param is required');
        }
        if (!req.params.placeId) {
            res.status(400);
            res.send('placeId param is required');
        }

        var filteredTracks = [];
        Place.findById(req.params.placeId)
            .populate('tracks')
            .exec(function (err, place) {
                if (place.tracks && place.tracks.length > 0) {
                    place.tracks.forEach(element => {
                        if (element.name == req.params.filterText || element.artists == req.params.filterText) {
                            filteredTracks.push(element);
                            console.log(filteredTracks);
                        }
                    });
                    res.status(200);
                    res.send(filteredTracks);
                }
            });

        // TODO search for track in tracks collection
        // to collect data what users really want in that place.
    };

    var placeMiddleware = function (req, res, next) {
        Place.findById(req.params.placeId, function (err, place) {
            if (err)
                res.status(500).send(err);
            else if (place) {
                req.place = place;
                // place tracks must be ordered by their rank
                next();
            }
            else
                res.status(404).send('place not found');
        });
    }

    var getDefPlaylistByPlaceId = function (req, res) {
        var retVal = req.place.tracks.slice(0, 20);
        req.place.playlist = retVal;
        req.place.save();
        res.status(200);
        res.send(retVal);
    }

    var getPlaylistByPlaceId = function (req, res) {
        var currList = req.place.playlist;
        

        var currList = currList.slice(1, 20);
        // TODO get a track to add to the end of playlist. must not be the first one.
        var nextTrack = req.place.tracks[23];
        currList.push(nextTrack);
        req.place.playlist = currList;
        req.place.save();
        
        res.status(200);
        res.send(req.place.playlist);
    }

    return {
        search: search,
        getDefPlaylistByPlaceId: getDefPlaylistByPlaceId,
        getPlaylistByPlaceId: getPlaylistByPlaceId,
        placeMiddleware: placeMiddleware
    };
};

module.exports = playlistController;