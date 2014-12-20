var ReactRouter = require('react-router');
var di = require('di');
var Routes = require('./routes');

var Router = function(Routes) {
  return ReactRouter.create({
    routes: Routes
  });
};

// Inject the Routes
di.annotate(Router, new di.Inject(Routes));

module.exports = Router;