var di = require('di');
var Router = require('./Router');
var React = require('react');

// Make the injector
var injector = new di.Injector([]);

// Grab the Router
var router = injector.get(Router);

// Get it up and running and render it into the DOM
router.run((Handler) => {
  React.render(<Handler />, document.body);
});
