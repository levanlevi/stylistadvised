var express = require('express');

var routes = function (Place, Track) {
    var playlistRouter = express.Router();
    var playlistController = require('./../controllers/playlistController')(Place, Track);

    playlistRouter.route('/search/:placeId/:filterText')
        .get(playlistController.search)

    playlistRouter.use('/getDefPlaylistByPlaceId/:placeId', playlistController.placeMiddleware);
    playlistRouter.route('/getDefPlaylistByPlaceId/:placeId').get(playlistController.getDefPlaylistByPlaceId);

    playlistRouter.use('/getPlaylistByPlaceId/:placeId', playlistController.placeMiddleware);
    playlistRouter.route('/getPlaylistByPlaceId/:placeId').get(playlistController.getPlaylistByPlaceId);

    return playlistRouter;
};

module.exports = routes;