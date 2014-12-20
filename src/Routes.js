var { Route } = require('react-router');
var AppHandler = require('./AppHandler');
var di = require('di');
var React = require('react');

var Routes = function(AppHandler) {
  return (
    <Route handler={AppHandler} />
  );
};
di.annotate(Routes, new di.Inject(AppHandler));

module.exports = Routes;