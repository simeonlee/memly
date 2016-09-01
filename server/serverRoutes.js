module.exports = {

  postTest: function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
  },

  getTest: function(req, res) {
    console.log('here'); 
    res.sendStatus(200);
  },

  auth: function(req, res) {
    console.log('fb auth success!');
  }

}