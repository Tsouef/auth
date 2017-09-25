module.exports = function(app) {
  console.log(app)
  app.get('/', function(req, res, next) {
    res.send(['waterbottle', 'phone', 'paper']);
  });
}
