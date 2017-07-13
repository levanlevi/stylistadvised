var express = require('express');

var routes = function (Place, Track) {
    var placeRouter = express.Router();

    var placeController = require('./../controllers/placeController')(Place, Track);

    placeRouter.route('/')
        .post(placeController.post)
        .get(placeController.get);

    placeRouter.route('/withTracks/:placeId')
        .get(placeController.withTracks);

    placeRouter.route('/addtracks/:placeId')
        .post(placeController.addTracks);

    placeRouter.use('/cleartracks/:placeId', placeController.singleMiddleware);
    placeRouter.route('/cleartracks/:placeId')
        .get(placeController.clearTracks);

    placeRouter.use('/:placeId', placeController.singleMiddleware);
    placeRouter.route('/:placeId')
        .get(placeController.getById)
        .put(placeController.putPlace)
        .patch(placeController.patchPlace)
        .delete(placeController.deletePlace);

    return placeRouter;
};

module.exports = routes;