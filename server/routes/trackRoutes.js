var express = require('express');

var routes = function () {
    var trackRouter = express.Router();
    var Track = require('./../models/trackModel');

    trackRouter.route('/')
        .post(function (req, res) {
            var track = new Track(req.body);

            if (!req.body.name) {
                res.status(400);
                res.send('name is required');
            }
            else {
                track.save();
                res.status(201);
                res.send(track);
            }
        });

    trackRouter.route('/next/')
        .get(function (req, res) {
            res.status(200).send('next song is albkdfojhfdhlaisdhglksadhg');
        });

    trackRouter.route('/')
        .get(function (req, res) {
            res.status(200).send('here is your default list of tracks by rank');
        });

    return trackRouter;
};

module.exports = routes;