// var express = require('express');
// var app = express();


// var friendData = require('../data/friends.js');

// module.exports = function (app) {
//     app.get('/api/friends', (req, res) => {
//         res.json(friendData);
//     })

//     app.post('/api/friends', (req, res) => {
//         //sum up new friend values
//         var bestMatch = {
//             name: '',
//             photo: '',
//             friendDiff: 1000
//         };
//         console.log(req.body);
//         var userData = req.body;
//         var userScores = userData.scores;
//         var totalDiff;

//         for (var i = 0; i < friendData.length; i++) {
//             var currentFriend = friendData[i];
//             totalDiff = 0;
//             console.log(currentFriend.name);

//             for (var j = 0; j < currentFriend.scores.length; j++) {
//                 var currentFriendScore = currentFriend.scores[j];
//                 var currentuserScore = userScores[j];

//                 totalDiff += Math.abs(parseInt(currentuserScore) - parseInt(currentFriendScore));

//                 if (totalDiff <= bestMatch.friendDiff) {

//                     bestMatch.name = currentFriend.name;
//                     bestMatch.photo = currentFriend.photo;
//                     bestMatch.friendDiff = totalDiff;
//                 };
//             };
//         }
//         friendData.push(userData);
//         res.json(bestMatch);
//     });

// };
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const friendsListAnalyzer = require('../data/friends.js');

let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));

router.get('/apiFriendList', (req, res) => {
    res.sendFile(path.join(__dirname, '../../friends.json'));

})

router.post('/newperson', function(req, res) {
    let newPerson = req.body;

    fs.readFile(path.join(__dirname, '../../friends.json'), function(err, data) {
        if (err) throw err;

        let friendArray = JSON.parse(data);

        friendArray.push(newPerson);

        fs.writeFile(path.join(__dirname, '../../friends.json'), JSON.stringify(friendArray, null, 2), 'utf-8', (err) => {
            if (err) throw err;

            console.log("file updated!");
        })

        let match = friendsListAnalyzer(friendArray);
        res.status(200).send(match);
    })
})

module.exports = router;