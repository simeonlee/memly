module.exports = {

  postTest: function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
  },

  getTest: function(req, res) { 
    res.sendStatus(200);
  }

}