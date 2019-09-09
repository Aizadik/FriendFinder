module.exports = function apiRoutes(app) {
        const fs = require("fs");
        const path = require("path");
        var friends = require("./../data/friends.js");

        app.get("/api/friends", function(req, res) {
            return res.json(friends);
        }); //get /api/friends

        app.post("/api/friends", function(req, res) {
            var totDiff;
            var diffArry = [];
            var newFriend = req.body;

            for (var i = 0; i < friends.length; i++) {
                totDiff = 0;
                for (var j = 0; j < newFriend.scores.length; j++) {
                    totDiff += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                } //for j
                diffArry.push(totDiff);
            } //for i

            var match = diffArry.indexOf(Math.min(...diffArry));

            friends.push(newFriend);

            console.log(newFriend);

            fs.readFile(path.join(__dirname, "../data/friends.json"), "utf8", function(err, data) {
                if (err) throw err;
                var json = JSON.parse(data);
                json.push(newFriend);
                fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(json, null, 2), function(err) {
                    if (err) throw err;
                });
            }); //fs.readFile
            res.json(friends[match]);
        }); //post /api/friends
    } //module.exports