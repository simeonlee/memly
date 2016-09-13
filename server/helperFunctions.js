if (process.env.NODE_ENV === 'development') {
  var url = 'http://localhost:3000';
} else {
  var url = 'https://memly.herokuapp.com';
};

module.exports = {
  isLoggedIn: function(req, res, next) {
    console.log('I am hitting isLoggedIn helper function');
    if (!req.session.passport) {
      console.log('no passport session detected. sorry!!!');
      res.redirect(url + '/#');
    } else if (!req.session.passport.user) {
      console.log('no passport user defined. maybe next time????');
      res.redirect(url + '/#');
    } else {
      next();
    }
  }
};