const User = require("../models/User");

//Gets a user's weightHistory
function getHistory(req, res) {
  User.findOne(
    {username: req.query.user},
    (err, userObj) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(userObj.weightHistory);
    }
  )
}

//Adds current weight to a user's weight array
function addWeight(req, res) {
  User.findOneAndUpdate({username: req.query.user}, //finds object by username
    {"$push": {weightHistory: JSON.parse(req.query.weightObj)}}, //pushes new weightObj to weight array
    {useFindAndModify: false, new: true}, //option to turn off deprecated function and return updated userObj
    (err, userObj) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      return res.status(200).send(userObj.weightHistory);
    }
  );
}

module.exports = {getHistory, addWeight};